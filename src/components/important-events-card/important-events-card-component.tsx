import {
  ImportantEventsCard,
  ImportantEventsList,
  ImportantEvent,
} from "./important-events-card-styles";

import { MainCardComponent } from "../main-card/main-card-component";

export const ImportantEventsCardComponent = () => {
  return (
    <MainCardComponent>
      <ImportantEventsCard>
        <h3>Eventos Importantes</h3>
        <ImportantEventsList>
          <ImportantEvent>
            <span>Dia 26/03/2023</span>
            <div>
              <p>
                Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho
                do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do banheiro,
                queda leve ralando o joelho e cotovelo.
              </p>
            </div>
          </ImportantEvent>
          <ImportantEvent>
            <span>Dia 26/03/2023</span>
            <p>
              Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho
              do banheiro, queda leve ralando o joelho e cotovelo. Queda a caminho do banheiro,
              queda leve ralando o joelho e cotovelo..
            </p>
          </ImportantEvent>
          {/*
          <ImportantEvent>
            <span>Dia 26/03/2023</span>
            <p>Queda a caminho do banheiro.</p>
          </ImportantEvent>
          <ImportantEvent>
            <span>Dia 26/03/2023</span>
            <p>Queda a caminho do banheiro, queda leve ralando o joelho e cotovelo.</p>
          </ImportantEvent> */}
        </ImportantEventsList>
      </ImportantEventsCard>
    </MainCardComponent>
  );
};
