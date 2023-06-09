import { MainCardComponent } from "../main-card/main-card-component";
import { ExercisesCard, Test, Test2 } from "./exercises-card-styles";
import { ExercisesChartConfig } from "../../utils/exercises-chart/exercises-chart-utils";
import { Doughnut } from "react-chartjs-2";

export const ExercisesCardComponent = () => {
  return (
    <ExercisesCard>
      <MainCardComponent>
        <Test>
          <h3>Exercícios</h3>
          <Test2>
            <Doughnut data={ExercisesChartConfig.data} options={ExercisesChartConfig.options} />
          </Test2>
        </Test>
      </MainCardComponent>
    </ExercisesCard>
  );
};
