import styled from "styled-components";

export const ProfessionalCard = styled.div`
  grid-area: professional;
  height: 100%;

  h3 {
    text-align: left;
  }
`;

export const ProfessionalContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px 0;
`;

export const ProfessionalContact = styled.div`
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 0.5em;
  width: clamp(80px, 44%, 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
  box-sizing: border-box;

  p:first-child {
    font-weight: bold;
  }

  p,
  span {
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: 20px;
  }
`;
