import styled from "styled-components";

export const HabitsCard = styled.div`
  /* width: clamp(100px, 80vw, 340px); */
  /* width: 100%; */
  grid-area: habits;

  /* width: 10%; */

  display: flex;
  flex-direction: column;
  gap: 5px;
  /* height: 100%; */

  h3 {
    text-align: left;
  }

  p {
    /* border: 1px solid purple; */
    width: 100%;
    height: 1.5em;
    /* width: 100%;
    height: 20px; */

    text-align: left;
    /* text-overflow: clip; */
    /* white-space: nowrap; */
    word-break: break-all;
    overflow: hidden;
  }

  /* border: 1px solid; */
`;

export const Habit = styled.div`
  /* width: 10%;
  min-width: 20px;
  */
  /* border: 1px solid; */

  display: flex;
  align-items: center;
  gap: 6px;
  /* overflow: hidden; */
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 2px 5px;
`;

export const HabitIconContainer = styled.div`
  height: 34px;
  min-width: 34px;
  /* 34px */
`;
