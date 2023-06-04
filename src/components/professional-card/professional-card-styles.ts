import styled from "styled-components";

export const ProfessionalCard = styled.div`
  width: clamp(100px, 80vw, 340px);

  h3 {
    text-align: left;
  }
`;

export const ProfessionalContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
`;

export const ProfessionalContact = styled.div`
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 10px;
  width: 40%;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  p,
  span {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
