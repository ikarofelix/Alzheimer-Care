import LoginPageIcon from "../../assets/login-route/login-page-icon.png";
import {
  AuthRoute,
  AuthSection,
  AuthContainer,
  AuthForm,
  AuthTitle,
  ButtonsContainer,
  GoogleLoginContainer,
  LogoContainer,
} from "../auth-styles/auth-route-styles";
import { ButtonComponent, ButtonComponentTypes } from "../../components/button/button-component";
import { InputComponent, LabelComponent } from "../../components/input/input-component";
import { GoogleIcon } from "../../assets/login-route/google-icon";

export const SignInRoute = () => {
  return (
    <AuthRoute>
      <AuthSection>
        <AuthContainer>
          <AuthTitle>
            <h1>Seja bem-vindo(a)!</h1>
            <h3>Por favor, insira suas informações.</h3>
          </AuthTitle>
          <AuthForm action="">
            <div>
              <LabelComponent htmlFor="login-email">Email</LabelComponent>
              <InputComponent
                type="email"
                id="login-email"
                name="login-email"
                placeholder="Insira seu email"
                maxLength={255}
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
              />
            </div>
            <ButtonsContainer>
              <ButtonComponent color={ButtonComponentTypes.LoginButton}>Entrar</ButtonComponent>
              <ButtonComponent color={ButtonComponentTypes.GoogleLoginButton}>
                <GoogleLoginContainer>
                  <GoogleIcon /> Entrar com Google
                </GoogleLoginContainer>
              </ButtonComponent>
              <ButtonComponent color={ButtonComponentTypes.LoginButton}>
                Entrar com conta demo
              </ButtonComponent>
            </ButtonsContainer>
            <p>
              Não possui uma conta?<a href=""> Cadatre-se</a>
            </p>
          </AuthForm>
        </AuthContainer>
      </AuthSection>
      <LogoContainer>
        <img src={LoginPageIcon} alt="Alzheimer Care Icon in Purple Color" />
      </LogoContainer>
    </AuthRoute>
  );
};
