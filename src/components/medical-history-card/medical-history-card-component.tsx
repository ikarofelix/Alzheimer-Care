import {
  MedicalHistoryCard,
  MedicalOptionsList,
  MedicalOption,
} from "./medical-history-card-styles";

export const MedicalHistoryCardComponent = () => {
  return (
    <MedicalHistoryCard>
      <h3>Acompanhamento Médico</h3>
      <MedicalOptionsList>
        <MedicalOption>
          <span>Relatórios de consultas</span>
        </MedicalOption>
        <MedicalOption>
          <span>Recomendações de tratamentos</span>
        </MedicalOption>
        <MedicalOption>
          <span>Resultados de exames</span>
        </MedicalOption>
        <MedicalOption>
          <span>Orientações médicas</span>
        </MedicalOption>
      </MedicalOptionsList>
    </MedicalHistoryCard>
  );
};
