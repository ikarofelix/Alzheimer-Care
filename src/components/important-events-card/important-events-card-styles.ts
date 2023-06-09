import styled from "styled-components";

export const ImportantEventsCard = styled.div`
  /* width: clamp(100px, 80vw, 460px); */
  /* width: 10%; */
  grid-area: events;

  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImportantEventsList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 100%;
`;

export const ImportantEvent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 20px; */
  /* width: 100%; */
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 10px;

  span {
    background: var(--linear-purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin: 0;

    width: 100%;
    height: 1.5em;

    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
    word-break: break-all;

    overflow: hidden;
  }
`;
