import styled from "styled-components";

import { ScreenSizes } from "../../App";

export const MedicalHistoryCard = styled.div`
  /* width: clamp(100px, 80vw, 536px); */
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
  /* width: 100%; */
  /* width: 100%; */
  /* max-width: 600px; */

  margin: auto;
  padding: 10px 0;
  box-sizing: border-box;

  /* border: 1px solid; */
`;

export const MedicalOption = styled.div`
  background: var(--linear-purple);
  color: var(--text-white);
  padding: 2em 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);

  /* width: clamp(100px, 90%, 800px); */
  /* width: 300px; */
`;
