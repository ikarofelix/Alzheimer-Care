import { MainCardComponent } from "../main-card/main-card-component";
import { ExercisesCard, Exercises, ExercisesChartContainer } from "./exercises-card-styles";
import { ExercisesChart } from "../../utils/exercises-chart/exercises-chart-utils";

export const ExercisesCardComponent = () => {
  return (
    <ExercisesCard>
      <MainCardComponent>
        <Exercises>
          <h3>Exercícios</h3>
          <ExercisesChartContainer>
            <ExercisesChart />
          </ExercisesChartContainer>
        </Exercises>
      </MainCardComponent>
    </ExercisesCard>
  );
};
