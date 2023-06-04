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
    <ProfessionalCard>
      <h3>Contatos Profissionais</h3>
      <ProfessionalContactList>
        <ProfessionalContact>
          <span>Dr. Higor Cristian</span>
          <p>Médico responsável</p>
          <DividerComponent color="var(--main-card-bg)" />
          <p>(31) 99838-9203</p>
          <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
        </ProfessionalContact>
        <ProfessionalContact>
          <span>Dra. Julia Rodrigues</span>
          <p>Terapeuta responsável</p>
          <DividerComponent color="var(--main-card-bg)" />
          <p>(31) 98755-7542</p>
          <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
        </ProfessionalContact>
        <ProfessionalContact>
          <span>Jorge Henrique</span>
          <p>Cuidador</p>
          <DividerComponent color="var(--main-card-bg)" />
          <p>(31) 98293-7840</p>
          <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
        </ProfessionalContact>
        <ProfessionalContact>
          <span>Maria Alice</span>
          <p>Cuidadora</p>
          <DividerComponent color="var(--main-card-bg)" />
          <p>(31) 97839-9232</p>
          <CallButton color={CallButtonColor.purple}>Ligar</CallButton>
        </ProfessionalContact>
      </ProfessionalContactList>
    </ProfessionalCard>
  );
};
