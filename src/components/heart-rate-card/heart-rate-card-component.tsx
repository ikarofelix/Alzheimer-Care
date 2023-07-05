import { HeartRateChart } from "../../utils/heart-rate-chart/heart-rate-chart-utils";
import { MainCardComponent } from "../main-card/main-card-component";
import {
  HeartRateCard,
  HeartRate,
  HeartRateCardSubtitle,
  HeartRateChartContainer,
} from "./heart-rate-card-styles";

export const HeartRateCardComponent = () => {
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
          <HeartRateChartContainer>
            <HeartRateChart />
          </HeartRateChartContainer>
        </HeartRate>
      </MainCardComponent>
    </HeartRateCard>
  );
};
