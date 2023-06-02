import { HeartRateChartConfig } from "../../utils/heart-rate-chart/heart-rate-chart-utils";
import { HeartRateCard, HeartRateCardChart, HeartRateCardSubtitle } from "./heart-rate-card-styles";

export const HeartRateCardComponent = () => {
  const { data, options, plugins } = HeartRateChartConfig;
  return (
    <HeartRateCard>
      <h3>Frequência Cardíaca</h3>
      <HeartRateCardSubtitle>
        <span>Estável</span>
        <span>Recomendado</span>
        <span>Perigo</span>
      </HeartRateCardSubtitle>
      <HeartRateCardChart data={data} options={options} plugins={plugins} />
    </HeartRateCard>
  );
};
