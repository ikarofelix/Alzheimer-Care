import { MainCardComponent } from "../main-card/main-card-component";
import { HabitsCard, Habit, HabitIconContainer } from "./habits-card-styles";
import { WalkIcon } from "../../assets/habits-card/walk-icon";
import { EatingIcon } from "../../assets/habits-card/eating-icon";
import { ShowerIcon } from "../../assets/habits-card/shower-icon";
import { HobbiesIcon } from "../../assets/habits-card/hobbies-icon";
import { CommunicationIcon } from "../../assets/habits-card/communication-icon";

export const HabitsCardComponent = () => {
  return (
    <MainCardComponent>
      <HabitsCard>
        <h3>Hábitos</h3>
        <Habit>
          <HabitIconContainer>
            <WalkIcon />
          </HabitIconContainer>
          <p>
            Dizer que estamos indo passear com seu cavalo sempre funciona, para que o Sinval possa
            se movimentar.
          </p>
        </Habit>
      </HabitsCard>
    </MainCardComponent>
  );
};
