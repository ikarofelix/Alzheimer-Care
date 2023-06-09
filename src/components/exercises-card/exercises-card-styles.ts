import styled from "styled-components";

export const ExercisesCard = styled.div`
  grid-area: exercises;

  /* border: 1px solid; */

  /* width: clamp(100px, 80vw, 400px); */
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    align-self: flex-start;
  }
`;

export const Test = styled.div`
  /* height: fit-content; */
  height: 100%;

  /* border: 1px solid green; */
`;

export const Test2 = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
  align-items: flex-start;

  /* 
  flex-direction: column; */

  height: 90%;
  width: 90%;
  margin: auto;
  /* width: 100%;
  max-width: 300px; */

  /* height: 50vw;
  max-height: 250px; */

  /* border: 1px solid blue; */
`;
