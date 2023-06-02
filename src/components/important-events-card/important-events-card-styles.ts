import styled from "styled-components";

export const ImportantEventsCard = styled.div`
  width: clamp(100px, 80vw, 400px);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImportantEvent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  overflow: hidden;
  width: 100%;

  span {
    background: var(--linear-purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
