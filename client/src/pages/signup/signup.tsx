import { useState, ChangeEvent, FormEvent } from "react";

import { AuthContainer, AuthTitle, AuthForm, ButtonsContainer } from "../auth/auth-page-styles";
import { LabelComponent, InputComponent } from "../../components/input/input-component";
import { ButtonComponent, ButtonComponentTypes } from "../../components/button/button-component";
import { signUpWithEmailAndPassword } from "../../utils/firebase/firebase";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { useLazyQuery } from "@apollo/client";
import { AUTHENTICATE_USER_QUERY } from "../../queries/queries";
import { LoaderComponent } from "../../components/loading/loader-component";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);

  const [authenticateUser] = useLazyQuery(AUTHENTICATE_USER_QUERY);

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSignUpError("");

    if (password != confirmPassword) {
      return setSignUpError("Suas senhas não são idênticas.");
    }

    try {
      const user = await signUpWithEmailAndPassword(email, password, name);

      setSignUpLoading(true);

      await authenticateUser({
        variables: {
          user: { uid: user.uid, displayName: user.displayName, email: user.email },
        },
      });

      window.location.href = "/";
    } catch (err) {
      (err as FirebaseError).code === AuthErrorCodes.EMAIL_EXISTS &&
        setSignUpError("Esse email já existe.");
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);

    if (password != event.target.value) {
      event.target.setCustomValidity("Suas senhas precisam ser idênticas.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>
        <h1>Cadastre-se</h1>
        <h3>Por favor, insira suas informações.</h3>
      </AuthTitle>
      <AuthForm onSubmit={signUp}>
        <div>
          <LabelComponent htmlFor="signup-name">Nome</LabelComponent>
          <InputComponent
            required
            type="name"
            id="signup-name"
            name="signup-name"
            placeholder="Insira seu nome"
            maxLength={255}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <LabelComponent htmlFor="signup-email">Email</LabelComponent>
          <InputComponent
            required
            type="email"
            id="signup-email"
            name="signup-email"
            placeholder="Insira seu email"
            maxLength={255}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <LabelComponent htmlFor="signup-password">Senha</LabelComponent>
          <InputComponent
            required
            type="password"
            id="signup-password"
            name="signup-password"
            placeholder="••••••••"
            maxLength={120}
            minLength={8}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <LabelComponent htmlFor="signup-confirm-password">Confirmar senha</LabelComponent>
          <InputComponent
            required
            type="password"
            id="signup-confirm-password"
            name="signup-confirm-password"
            placeholder="••••••••"
            maxLength={120}
            minLength={8}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <ButtonsContainer>
          <ButtonComponent color={ButtonComponentTypes.LoginButton}>Criar conta</ButtonComponent>
        </ButtonsContainer>
      </AuthForm>
      {signUpError && <p style={{ color: "red" }}>{signUpError}</p>}
      {signUpLoading && <LoaderComponent />}
    </AuthContainer>
  );
};
