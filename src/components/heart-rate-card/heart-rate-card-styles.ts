import styled from "styled-components";
import { ChartColors } from "../../utils/heart-rate-chart/heart-rate-chart-utils";

export const HeartRateCard = styled.div`
  /* width: clamp(118px, 80vw, 620px); */
  /* grid-column: span 2; */

  grid-area: heart;

  /* width: 100%; */
  height: 100%;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  /* border: 1px solid blue; */

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
  /* height: min(30vw, 400px); */

  /* height: 60vw; */
  /* max-height: 250px; */

  /* border: 1px solid red; */
`;

export const HeartRateCardSubtitle = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin: 0;
    font-weight: bold;
  }

  p:first-child {
    color: ${ChartColors.orange};
  }
  p:nth-child(2) {
    color: ${ChartColors.green};
  }
  p:last-child {
    color: ${ChartColors.red};
  }
`;

export const HeartRateChart = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  /* border: 1px solid blue; */
  width: 90%;
  height: 80%;

  overflow: hidden;

  /* box-sizing: border-box; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
