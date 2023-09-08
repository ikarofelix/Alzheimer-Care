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
import { AUTHENTICATE_USER_QUERY } from "../../queries/queries";
import { signInEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase";
import { AuthErrorCodes } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { signInUserHandler } from "../../handlers/sign-user";

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInError, setSignInError] = useState<string>("");
  const [authenticateUser] = useLazyQuery(AUTHENTICATE_USER_QUERY);

  const signInWithEmailAndPassword = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSignInError("");
    try {
      const user = await signInEmailAndPassword(email, password);
      const { data } = await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });

      await signInUserHandler(data.authenticate);
    } catch (err) {
      (err as FirebaseError).code === AuthErrorCodes.USER_DELETED &&
        setSignInError("Usuário não encontrado.");
      (err as FirebaseError).code === AuthErrorCodes.INVALID_PASSWORD &&
        setSignInError("Sua senha está incorreta.");
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const user = await signInWithGooglePopup();
      const { data } = await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });
      await signInUserHandler(data.authenticate);
    } catch (err) {
      throw err;
    }
  };

  const signInWithDemo = async (): Promise<void> => {
    try {
      const user = await signInEmailAndPassword(
        import.meta.env.VITE_DEMO_ACCOUNT_EMAIL,
        import.meta.env.VITE_DEMO_ACCOUNT_PASSWORD
      );
      const { data } = await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });

      await signInUserHandler(data.authenticate);
    } catch (err) {
      alert("Ocorreu um erro. Aguarde que a página será recarregada para que tente novamente.");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(event.target.value)) {
      event.target.setCustomValidity("");
    } else {
      event.target.setCustomValidity("Seu e-mail é inválido. Exemplo: user@email.com");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
      <AuthForm onSubmit={signInWithEmailAndPassword}>
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
            <GoogleLoginContainer onClick={signInWithGoogle}>
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
