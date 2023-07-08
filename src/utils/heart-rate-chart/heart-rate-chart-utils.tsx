import { Plugin, ChartOptions, ChartData, ChartConfiguration } from "chart.js";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";

ChartJS.register(CategoryScale);

enum ChartColors {
  purple = "#8d3abd",
  blue = "#1174ad",
  orange = "#FF7300",
  textDark = "#3D3E41",
}

const chartAreaBorder: Plugin<"bar"> = {
  id: "chartAreaBorder",
  beforeDraw: (chart) => {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;
    ctx.save();
    ctx.strokeStyle = ChartColors.orange;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(left, top + height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(left, top + height);
    ctx.lineTo(left + width, top + height);
    ctx.stroke();
    ctx.restore();
  },
};

const topLabels: Plugin<"bar"> = {
  id: "topLabels",
  beforeDraw(chart) {
    const {
      ctx,
      scales: { x },
    } = chart;

    chart.data.datasets[0].data.forEach((value, index) => {
      const containerWidth = (chart.canvas.parentNode as HTMLElement).clientWidth;

      let fontSize: number;

      if (containerWidth < 250) {
        fontSize = 0;
      } else if (containerWidth < 300) {
        fontSize = 6;
      } else if (containerWidth < 400) {
        fontSize = 8;
      } else if (containerWidth < 500) {
        fontSize = 10;
      } else {
        fontSize = 12;
      }

      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = ChartColors.textDark;
      ctx.textAlign = "center";
      ctx.fillText(
        `${value} BPM`,
        x.getPixelForValue(index),
        chart.getDatasetMeta(0).data[index].y - 10
      );
    });
  },
};

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "(BPM - Batimentos por minuto)",
      padding: { bottom: 30 },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: "Dia",
      },
    },
    y: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: "BPM",
      },
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

export const HeartRateChart = () => {
  const { bpm_card } = useAppSelector(currentUserSelector);

  const datesList = bpm_card && bpm_card.slice(0, 7).map((item) => item.date);
  const bpmList = bpm_card && bpm_card.slice(0, 7).map((item) => item.bpm);

  const data: ChartData<"bar"> = {
    labels: datesList,
    datasets: [
      {
        label: "BPM",
        data: bpmList as [number],
        backgroundColor: ((context: { raw: number }) => {
          if (context.raw < 100 || context.raw > 140) {
            return ChartColors.purple;
          } else if (context.raw > 110 && context.raw < 140) {
            return ChartColors.blue;
          } else {
            return ChartColors.orange;
          }
        }) as any,
        borderRadius: 5,
      },
    ],
  };

  const ChartConfig: ChartConfiguration<"bar"> = {
    type: "bar",
    data: data,
    options: options,
    plugins: [chartAreaBorder, topLabels],
  };

  return bpm_card && bpm_card.length ? (
    <Bar data={ChartConfig.data} options={ChartConfig.options} plugins={ChartConfig.plugins} />
  ) : (
    <p>Você não possui registro de frequência cardíaca</p>
  );
};
