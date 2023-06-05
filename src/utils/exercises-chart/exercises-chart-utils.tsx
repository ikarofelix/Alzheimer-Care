import { ChartOptions, ChartData, ChartConfiguration } from "chart.js";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

ChartJS.register(CategoryScale);

const data: ChartData<"doughnut"> = {
  labels: ["Caminhada", "Agachamento", "Jogo da memória", "Treino de mão"],
  datasets: [
    {
      label: "Minutos",
      data: [30, 10, 25, 15],
      backgroundColor: ["#4F8EAB", "#4E78BB", "#7735AC", "#B744CF"],
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
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

export const ExercisesChartConfig: ChartConfiguration<"doughnut"> = {
  type: "doughnut",
  data: data,
  options: options,
};
