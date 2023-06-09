import { WalkIcon } from "../../assets/habits-card/walk-icon";
import { EatingIcon } from "../../assets/habits-card/eating-icon";
import { ShowerIcon } from "../../assets/habits-card/shower-icon";
import { HobbiesIcon } from "../../assets/habits-card/hobbies-icon";
import { CommunicationIcon } from "../../assets/habits-card/communication-icon";

import { HabitsCard, Habit, HabitIconContainer } from "./habits-card-styles";

import { MainCardComponent } from "../main-card/main-card-component";

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

        {/* <Habit>
          <HabitIconContainer>
            <EatingIcon />
          </HabitIconContainer>
          <p>
            Na hora da alimentação, tratá-lo com comida e talheres coloridos para chamarem sua
            atenção.
          </p>
        </Habit>

        <Habit>
          <HabitIconContainer>
            <ShowerIcon />
          </HabitIconContainer>
          <p>Durante o banho, nunca deixá-lo sozinho mesmo que esteja na cadeira.</p>
        </Habit>

        <Habit>
          <HabitIconContainer>
            <HobbiesIcon />
          </HabitIconContainer>
          <p>Adora jogo da memória ou uno, principalmente quando brinca com os netos.</p>
        </Habit>

        <Habit>
          <HabitIconContainer>
            <CommunicationIcon />
          </HabitIconContainer>
          <p>
            Sempre utilizar uma linguagem mais simples. Não o contrariar quando esquecer de algo,
            sempre fica muito nervoso quando isso acontece.
          </p>
        </Habit> */}
      </HabitsCard>
    </MainCardComponent>
  );
};
