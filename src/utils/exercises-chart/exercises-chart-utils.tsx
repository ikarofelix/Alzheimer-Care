import { ChartOptions, ChartData, ChartConfiguration } from "chart.js";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";

ChartJS.register(CategoryScale);

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
  },
  animation: {
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default") {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
    duration: 1000,
  },
};

export const ExercisesChart = () => {
  const { exercise_card } = useAppSelector(currentUserSelector);

  const data: ChartData<"doughnut"> = {
    labels: exercise_card && exercise_card.length && exercise_card.map((item) => item.name),
    datasets: [
      {
        label: "Minutos",
        data:
          exercise_card &&
          exercise_card.length &&
          (exercise_card.map((item) => item.minutes) as [number]),
        backgroundColor: [
          "#00A3FF",
          "#0085FF",
          "#0057FF",
          "#0038FF",
          "#2400FF",
          "#5200FF",
          "#8000FF",
          "#9E00FF",
          "#DB00FF",
          "#FF00F5",
        ],
      },
    ],
  };

  const ChartConfig: ChartConfiguration<"doughnut"> = {
    type: "doughnut",
    data: data,
    options: options,
  };

  return exercise_card && exercise_card.length ? (
    <Doughnut data={ChartConfig.data} options={ChartConfig.options} />
  ) : (
    <p style={{ textAlign: "center" }}>Você não possui exercício</p>
  );
};
