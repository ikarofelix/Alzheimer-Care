import styled from "styled-components";

export const PersonalInfoCard = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 30%;
    min-width: 70px;
    /* width: clamp(70px, 13vw, 100px); */
    /* height: 70px; */
    /* height: clamp(70px, 13vw, 100px); */
    height: 30%;
    min-height: 70px;

    border-radius: var(--border-radius);
  }
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const PersonalInfo = styled.div`
  /* width: 154px; */

  /* width: clamp(70px, 10vw, 154px); */
  width: 100%;
  height: clamp(18px, 5vw, 25px);

  /* min-height: 18px;
  height: 5vw;
  max-height: 30px; */

  display: flex;
  align-items: center;
  gap: 8px;

  align-self: center;

  color: var(--text-white-color);

  border-radius: var(--border-radius);
  /* padding: 1em 2em; */
  padding: 5px 20px;

  /* box-sizing: border-box; */

  background: var(--linear-purple);
`;
