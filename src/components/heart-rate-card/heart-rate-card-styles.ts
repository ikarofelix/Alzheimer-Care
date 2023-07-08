import styled from "styled-components";

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

export const HeartRateChartContainer = styled.div`
  width: 90%;
  height: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
