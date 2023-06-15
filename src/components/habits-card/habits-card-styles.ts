import styled from "styled-components";

export const HabitsCard = styled.div`
  grid-area: habits;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    text-align: left;
  }

  p {
    width: 100%;
    height: 1.5em;
    text-align: left;
    word-break: break-all;
    overflow: hidden;
  }
`;

export const Habit = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 2px 5px;
`;

export const HabitIconContainer = styled.div`
  height: 34px;
  min-width: 34px;
`;
