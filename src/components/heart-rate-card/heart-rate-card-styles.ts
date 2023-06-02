import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { ChartColors } from "../../utils/heart-rate-chart/heart-rate-chart-utils";

export const HeartRateCard = styled.div`
  width: clamp(118px, 80vw, 560px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const HeartRateCardSubtitle = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span:first-child {
    color: ${ChartColors.orange};
  }
  span:nth-child(2) {
    color: ${ChartColors.green};
  }
  span:last-child {
    color: ${ChartColors.red};
  }
`;

export const HeartRateCardChart = styled(Bar)`
  width: 100%;
`;
