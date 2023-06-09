import { MainCardComponent } from "../main-card/main-card-component";
import {
  MedicalHistoryCard,
  MedicalOptionsList,
  MedicalOption,
} from "./medical-history-card-styles";

export const MedicalHistoryCardComponent = () => {
  return (
    <MedicalHistoryCard>
      <MainCardComponent>
        <h3>Acompanhamento Médico</h3>
        <MedicalOptionsList>
          <MedicalOption>
            <span>Relatórios de consultas</span>
          </MedicalOption>
          <MedicalOption>
            <span>Tratamentos</span>
          </MedicalOption>
          <MedicalOption>
            <span>Resultados de exames</span>
          </MedicalOption>
          <MedicalOption>
            <span>Orientações médicas</span>
          </MedicalOption>
        </MedicalOptionsList>
      </MainCardComponent>
    </MedicalHistoryCard>
  );
};
