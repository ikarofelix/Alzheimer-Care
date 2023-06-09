import { MainCardComponent } from "../main-card/main-card-component";
import { HeartRateChartConfig } from "../../utils/heart-rate-chart/heart-rate-chart-utils";
import {
  HeartRateCard,
  HeartRate,
  HeartRateCardSubtitle,
  HeartRateChart,
} from "./heart-rate-card-styles";
import { Bar } from "react-chartjs-2";

export const HeartRateCardComponent = () => {
  const { data, options, plugins } = HeartRateChartConfig;

  return (
    <HeartRateCard>
      <MainCardComponent>
        <h3>Frequência Cardíaca</h3>
        <HeartRate>
          <HeartRateCardSubtitle>
            <p>Estável</p>
            <p>Recomendado</p>
            <p>Perigo</p>
          </HeartRateCardSubtitle>
          <HeartRateChart>
            <Bar data={data} options={options} plugins={plugins} />
          </HeartRateChart>
        </HeartRate>
      </MainCardComponent>
    </HeartRateCard>
  );
};
