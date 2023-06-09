import { MainCardComponent } from "../main-card/main-card-component";
import { PersonalInfoCard, PersonalInfoContainer, PersonalInfo } from "./personal-info-card-styles";
import { DividerComponent } from "../divider/divider-component";
import ElderlyMan from "../../assets/personal-info-card/elderly-man.jpg";

export const PersonalInfoCardComponent = () => {
  return (
    <MainCardComponent>
      <PersonalInfoCard>
        <div>
          <h3>Sinval Batista</h3>
          <img
            src={ElderlyMan}
            alt="Desenho de um senhor de idade com cabelo e barba brancos, um óculos azul, casaco laranja em um fundo azul escuro"
          />
        </div>
        <DividerComponent color="var(--linear-purple)"></DividerComponent>
        <PersonalInfoContainer>
          <PersonalInfo>
            <p>
              <span>Idade: </span>86 anos
            </p>
          </PersonalInfo>
          <PersonalInfo>
            <p>
              <span>Peso: </span>60Kg
            </p>
          </PersonalInfo>
          <PersonalInfo>
            <p>
              <span>Altura: </span>1,70m
            </p>
          </PersonalInfo>
        </PersonalInfoContainer>
        <a href="">Av. Rio Madeira, 10 - Santa Cruz, Betim - MG, 32667-022</a>
      </PersonalInfoCard>
    </MainCardComponent>
  );
};
