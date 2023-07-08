import { MainCardComponent } from "../main-card/main-card-component";
import {
  CommunicationCard,
  Communication,
  CommunicationIconContainer,
  CommunicationList,
} from "./communication-card-styles";
import { WalkIcon } from "../../assets/communication-card/walk-icon";
import { FoodIcon } from "../../assets/communication-card/eating-icon";
import { ShowerIcon } from "../../assets/communication-card/shower-icon";
import { HobbiesIcon } from "../../assets/communication-card/hobbies-icon";
import { CommunicationIcon } from "../../assets/communication-card/communication-icon";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";
import { CommunicationCategory } from "../../types/user-types";

export const CommunicationCardComponent = () => {
  const { communication_card } = useAppSelector(currentUserSelector);

  const categoryToIconMap = {
    [CommunicationCategory.walk]: <WalkIcon />,
    [CommunicationCategory.food]: <FoodIcon />,
    [CommunicationCategory.shower]: <ShowerIcon />,
    [CommunicationCategory.hobbies]: <HobbiesIcon />,
    [CommunicationCategory.communication]: <CommunicationIcon />,
  };

  return (
    <MainCardComponent>
      <CommunicationCard>
        <h3>Comunicação</h3>
        <CommunicationList>
          {communication_card && communication_card.length ? (
            communication_card.slice(0, 4).map((item) => {
              const Icon = categoryToIconMap[item.category];
              return (
                <Communication key={communication_card.indexOf(item)}>
                  <CommunicationIconContainer>{Icon}</CommunicationIconContainer>
                  <p>{item.text}</p>
                </Communication>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>Você não possui item de comunicação</p>
          )}
        </CommunicationList>
      </CommunicationCard>
    </MainCardComponent>
  );
};
