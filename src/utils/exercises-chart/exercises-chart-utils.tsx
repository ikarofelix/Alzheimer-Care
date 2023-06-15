import { ChartOptions, ChartData, ChartConfiguration } from "chart.js";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

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

const ChartConfig: ChartConfiguration<"doughnut"> = {
  type: "doughnut",
  data: data,
  options: options,
};

export const ExercisesChart = () => {
  return <Doughnut data={ChartConfig.data} options={ChartConfig.options} />;
};
