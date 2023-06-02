import styled from "styled-components";

export const HabitsCard = styled.div`
  width: clamp(100px, 80vw, 340px);
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    text-align: left;
  }

  p {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Habit = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`;

export const HabitIconContainer = styled.div`
  height: 34px;
  min-width: 34px;
`;
