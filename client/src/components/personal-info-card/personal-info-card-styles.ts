import styled from "styled-components";

export const PersonalInfoCard = styled.div`
  grid-area: profile;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 100%;
    max-width: 100px;
    height: 100%;
    max-height: 100px;
    border-radius: var(--border-radius);
  }
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const PersonalInfo = styled.div`
  width: 100%;
  height: clamp(18px, 5vw, 25px);
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
  border-radius: var(--border-radius);
  padding: 5px 20px;
  color: var(--text-white);
  background: var(--linear-purple);
`;
