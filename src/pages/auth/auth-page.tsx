import { useState } from "react";
import { AuthPageContainer, AuthSection, LogoContainer } from "./auth-page-styles";
import { SignIn } from "../signin/signin";
import { SignUp } from "../signup/signup";
import LoginPageIcon from "../../assets/login-route/login-page-icon.png";

export const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <AuthPageContainer>
      <AuthSection>
        {login ? (
          <>
            <SignIn />
            <p>
              Não possui uma conta?
              <a onClick={() => setLogin(false)}> Cadatre-se</a>
            </p>
          </>
        ) : (
          <>
            <SignUp />
            <p>
              Já possui uma conta?
              <a onClick={() => setLogin(true)}> Entrar</a>
            </p>
          </>
        )}
      </AuthSection>
      <LogoContainer>
        <img src={LoginPageIcon} alt="Logo da Alzheimer Care na cor roxa" />
      </LogoContainer>
    </AuthPageContainer>
  );
};
