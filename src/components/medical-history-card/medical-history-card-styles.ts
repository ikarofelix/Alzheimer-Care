import styled from "styled-components";

export const MedicalHistoryCard = styled.div`
  grid-area: history;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: left;
  }
`;

export const MedicalOptionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 20px;
  margin: auto;
  padding: 10px 0;
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
