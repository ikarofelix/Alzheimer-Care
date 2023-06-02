import { ImportantEventsCard, ImportantEvent } from "./important-events-card-styles";

export const ImportantEventsCardComponent = () => {
  return (
    <ImportantEventsCard>
      <h3>Eventos Importantes</h3>
      <ImportantEvent>
        <span>Dia 26/03/2023</span>
        <div>
          <p>
            Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do
            banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do banheiro, queda
            leve ralando o joelho e cotovelo.
          </p>
        </div>
      </ImportantEvent>
      <ImportantEvent>
        <span>Dia 26/03/2023</span>
        <p>
          Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do
          banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do banheiro, queda leve
          ralando o joelho e cotovelo..
        </p>
      </ImportantEvent>
      <ImportantEvent>
        <span>Dia 26/03/2023</span>
        <p>Queda a caminho do banheiro.</p>
      </ImportantEvent>
      <ImportantEvent>
        <span>Dia 26/03/2023</span>
        <p>Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo.</p>
      </ImportantEvent>
    </ImportantEventsCard>
  );
};
