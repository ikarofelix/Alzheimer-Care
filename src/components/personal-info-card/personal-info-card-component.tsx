import { MainCardComponent } from "../main-card/main-card-component";
import {
  PersonalInfoCard,
  PersonalInfoContainer,
  PersonalInfo,
  PersonalInfoText,
} from "./personal-info-card-styles";
import { DividerComponent } from "../divider/divider-component";
import ProfileImg from "../../assets/personal-info-card/profile.png";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";

export const PersonalInfoCardComponent = () => {
  const { name, age, weight, height, address } = useAppSelector(currentUserSelector);

  const renderAge = (age: number) => {
    if (age) {
      return age > 1 ? `${age} anos` : `${age} ano`;
    }
    return "não informada";
  };

  const renderHeight = (height: number) => {
    if (height) {
      return height < 100
        ? `${height} cm`
        : `${(height / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}m `;
    }
    return "não informada";
  };

  const renderWeight = (weight: number) => {
    if (weight) {
      return `${weight}Kg`;
    }
    return "não informado";
  };

  return (
    <MainCardComponent>
      <PersonalInfoCard>
        <div>
          <PersonalInfoText as={"h3"}>{name}</PersonalInfoText>
          <img
            src={ProfileImg}
            alt="Ícone em branco de um casal de idosos, cada um com sua bengala em um fundo azul escuro"
          />
        </div>
        <DividerComponent color="var(--linear-purple)"></DividerComponent>
        <PersonalInfoContainer>
          <PersonalInfo>
            <p>
              <span>Idade: </span>
              {renderAge(Number(age))}
            </p>
          </PersonalInfo>
          <PersonalInfo>
            <p>
              <span>Altura: </span>
              {renderHeight(Number(height))}
            </p>
          </PersonalInfo>
          <PersonalInfo>
            <p>
              <span>Peso: </span>
              {renderWeight(Number(weight))}
            </p>
          </PersonalInfo>
        </PersonalInfoContainer>
        <PersonalInfoText as={"a"}>{address ? address : "Endereço não informado"}</PersonalInfoText>
      </PersonalInfoCard>
    </MainCardComponent>
  );
};
