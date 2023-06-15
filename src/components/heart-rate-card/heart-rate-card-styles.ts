import styled from "styled-components";
import { ChartColors } from "../../utils/heart-rate-chart/heart-rate-chart-utils";

export const HeartRateCard = styled.div`
  grid-area: heart;
  height: 100%;

  h3 {
    text-align: left;
  }
`;

export const HeartRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

export const HeartRateCardSubtitle = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin: 0;
    font-weight: bold;
    :first-child {
      color: ${ChartColors.orange};
    }
    :nth-child(2) {
      color: ${ChartColors.green};
    }
    :last-child {
      color: ${ChartColors.red};
    }
  }
`;

export const HeartRateChartContainer = styled.div`
  width: 90%;
  height: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
