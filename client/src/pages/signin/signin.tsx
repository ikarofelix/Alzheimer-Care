import { useState, ChangeEvent, FormEvent } from "react";
import { useLazyQuery } from "@apollo/client/react";
import {
  AuthContainer,
  AuthForm,
  AuthTitle,
  ButtonsContainer,
  GoogleLoginContainer,
} from "../auth/auth-page-styles";
import { InputComponent, LabelComponent } from "../../components/input/input-component";
import { ButtonComponent, ButtonComponentTypes } from "../../components/button/button-component";
import { GoogleIcon } from "../../assets/login-route/google-icon";
import { UserGoogleType } from "../../types/user-types";
import { AUTHENTICATE_USER_QUERY } from "../../queries/queries";
import { signInEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase";
import { AuthErrorCodes } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const [authenticateUser] = useLazyQuery(AUTHENTICATE_USER_QUERY);

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignInError("");
    try {
      const user = await signInEmailAndPassword(email, password);
      await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });
      window.location.href = "/";
    } catch (err) {
      (err as FirebaseError).code === AuthErrorCodes.USER_DELETED &&
        setSignInError("Usuário não encontrado.");
      (err as FirebaseError).code === AuthErrorCodes.INVALID_PASSWORD &&
        setSignInError("Sua senha está incorreta.");
    }
  };

  const signInWithDemo = async () => {
    try {
      const user = await signInEmailAndPassword("test@gmail.com", "password");
      await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });
      window.location.href = "/";
    } catch (err) {
      throw err;
    }
  };

  const userAuthentication = async (user: UserGoogleType) => {
    try {
      await authenticateUser({
        variables: {
          user,
        },
      });
      window.location.href = "/";
    } catch (err) {
      throw err;
    }
  };

  const LoginWithGoogle = async () => {
    try {
      const user = await signInWithGooglePopup();
      const { uid, displayName, email } = user as UserGoogleType;
      await userAuthentication({ uid, displayName, email });
    } catch (err) {
      throw err;
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(event.target.value)) {
      event.target.setCustomValidity("");
    } else {
      event.target.setCustomValidity("Seu e-mail é inválido. Exemplo: user@email.com");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      event.target.setCustomValidity("Sua senha precisa ter pelo menos 8 caracteres.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>
        <h1>Seja bem-vindo(a)!</h1>
        <h3>Por favor, insira suas informações.</h3>
      </AuthTitle>
      <AuthForm onSubmit={signIn}>
        <div>
          <LabelComponent htmlFor="login-email">Email</LabelComponent>
          <InputComponent
            type="email"
            id="login-email"
            name="login-email"
            placeholder="Insira seu email"
            maxLength={255}
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <LabelComponent htmlFor="login-password">Senha</LabelComponent>
          <InputComponent
            type="password"
            id="login-password"
            name="login-password"
            placeholder="••••••••"
            maxLength={255}
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        {signInError && <p style={{ color: "red" }}>{signInError}</p>}
        <ButtonsContainer>
          <ButtonComponent color={ButtonComponentTypes.LoginButton} type="submit">
            Entrar
          </ButtonComponent>
          <ButtonComponent color={ButtonComponentTypes.GoogleLoginButton} type="button">
            <GoogleLoginContainer onClick={LoginWithGoogle}>
              <GoogleIcon /> Entrar com Google
            </GoogleLoginContainer>
          </ButtonComponent>
          <ButtonComponent
            color={ButtonComponentTypes.LoginButton}
            onClick={signInWithDemo}
            type="button"
          >
            Entrar com conta demo
          </ButtonComponent>
        </ButtonsContainer>
      </AuthForm>
    </AuthContainer>
  );
};
