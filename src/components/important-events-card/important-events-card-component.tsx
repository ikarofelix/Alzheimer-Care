import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";
import { MainCardComponent } from "../main-card/main-card-component";
import {
  ImportantEventsCard,
  ImportantEventsList,
  ImportantEvent,
} from "./important-events-card-styles";

export const ImportantEventsCardComponent = () => {
  const { event_card } = useAppSelector(currentUserSelector);

  return (
    <MainCardComponent>
      <ImportantEventsCard>
        <h3>Eventos Importantes</h3>
        <ImportantEventsList>
          {event_card && event_card.length ? (
            event_card.slice(0, 3).map((item) => {
              return (
                <ImportantEvent key={event_card.indexOf(item)}>
                  <span>{item.date}</span>
                  <div>
                    <p>{item.text}</p>
                  </div>
                </ImportantEvent>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>Você não possui evento importante</p>
          )}
        </ImportantEventsList>
      </ImportantEventsCard>
    </MainCardComponent>
  );
};
