import styled from "styled-components";

export const ExercisesCard = styled.div`
  grid-area: exercises;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: left;
  }
`;

export const Exercises = styled.div`
  height: 100%;
`;

export const ExercisesChartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90%;
  width: 90%;
  margin: auto;
`;
