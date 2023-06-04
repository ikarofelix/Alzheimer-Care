import styled from "styled-components";

export const MedicalHistoryCard = styled.div`
  width: clamp(100px, 80vw, 536px);
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: left;
  }
`;

export const MedicalOptionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const MedicalOption = styled.div`
  background: var(--linear-purple);
  color: var(--text-white);
  padding: 2em 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
`;
