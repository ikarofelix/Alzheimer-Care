import LoginPageIcon from "../../assets/login-route/login-page-icon.png";
import {
  AuthRoute,
  AuthSection,
  AuthContainer,
  AuthTitle,
  AuthForm,
  ButtonsContainer,
  LogoContainer,
} from "../auth-styles/auth-route-styles";
import { LabelComponent, InputComponent } from "../../components/input/input-component";
import { ButtonComponent, ButtonComponentTypes } from "../../components/button/button-component";

export const SignUpRoute = () => {
  return (
    <AuthRoute>
      <AuthSection>
        <AuthContainer>
          <AuthTitle>
            <h1>Cadastre-se</h1>
            <h3>Por favor, insira suas informações.</h3>
          </AuthTitle>
          <AuthForm action="">
            <div>
              <LabelComponent htmlFor="signup-name">Nome</LabelComponent>
              <InputComponent
                type="name"
                id="signup-name"
                name="signup-name"
                placeholder="Insira seu nome"
                maxLength={255}
              />
            </div>
            <div>
              <LabelComponent htmlFor="signup-age">Idade</LabelComponent>
              <InputComponent
                type="age"
                id="signup-age"
                name="signup-age"
                placeholder="Insira sua idade"
                maxLength={255}
              />
            </div>
            <div>
              <LabelComponent htmlFor="signup-email">Email</LabelComponent>
              <InputComponent
                type="email"
                id="signup-email"
                name="signup-email"
                placeholder="Insira seu email"
                maxLength={255}
              />
            </div>
            <div>
              <LabelComponent htmlFor="signup-password">Senha</LabelComponent>
              <InputComponent
                type="password"
                id="signup-password"
                name="signup-password"
                placeholder="••••••••"
                maxLength={255}
              />
            </div>
            <div>
              <LabelComponent htmlFor="signup-confirm-password">Confirmar senha</LabelComponent>
              <InputComponent
                type="confirm-password"
                id="signup-confirm-password"
                name="signup-confirm-password"
                placeholder="••••••••"
                maxLength={255}
              />
            </div>
            <ButtonsContainer>
              <ButtonComponent color={ButtonComponentTypes.LoginButton}>
                Criar conta
              </ButtonComponent>
            </ButtonsContainer>
            <p>
              Já possui uma conta?<a href=""> Entrar</a>
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
