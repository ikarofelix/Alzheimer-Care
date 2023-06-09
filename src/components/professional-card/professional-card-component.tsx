import { MainCardComponent } from "../main-card/main-card-component";
import {
  ProfessionalCard,
  ProfessionalContactList,
  ProfessionalContact,
} from "./professional-card-styles";
import { DividerComponent } from "../divider/divider-component";
import { CallButton } from "../call-button/call-button-component";
import { CallButtonColor } from "../call-button/call-button-component";

export const ProfessionalCardComponent = () => {
  return (
    <MainCardComponent>
      <ProfessionalCard>
        <h3>Contatos Profissionais</h3>
        <ProfessionalContactList>
          <ProfessionalContact>
            <p>Dr. Higor Cristian</p>
            <DividerComponent color="var(--text-white)" />
            <p>Médico responsável</p>
            <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
          </ProfessionalContact>

          {/* <ProfessionalContact>
            <p>Dra. Julia Rodrigues</p>
            <DividerComponent color="var(--main-card-bg)" />
            <p>Terapeuta responsável</p>
            <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
          </ProfessionalContact> */}

          <ProfessionalContact>
            <p>Jorge Henrique</p>
            <DividerComponent color="var(--main-card-bg)" />
            <p>Cuidador</p>
            <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
          </ProfessionalContact>

          <ProfessionalContact>
            <p>Maria Alice</p>
            <DividerComponent color="var(--main-card-bg)" />
            <p>Cuidadora</p>
            <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
          </ProfessionalContact>

          {/* <p>(31) 97839-9232</p> */}
        </ProfessionalContactList>
      </ProfessionalCard>
    </MainCardComponent>
  );
};
