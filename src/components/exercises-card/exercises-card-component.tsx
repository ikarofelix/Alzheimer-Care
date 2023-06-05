import { ExercisesCard } from "./exercises-card-styles";
import { ExercisesChartConfig } from "../../utils/exercises-chart/exercises-chart-utils";
import { Doughnut } from "react-chartjs-2";

export const ExercisesCardComponent = () => {
  return (
    <ExercisesCard>
      <h3>Exercícios</h3>
      <Doughnut data={ExercisesChartConfig.data} options={ExercisesChartConfig.options} />
    </ExercisesCard>
  );
};
