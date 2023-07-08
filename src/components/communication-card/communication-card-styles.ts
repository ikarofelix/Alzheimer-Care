import styled from "styled-components";

export const CommunicationCard = styled.div`
  grid-area: communication;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    text-align: left;
  }
`;

export const Communication = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 2px 5px;

  p {
    width: 100%;
    height: 1.5em;
    text-align: left;
    word-break: break-all;
    overflow: hidden;
  }
`;

export const CommunicationIconContainer = styled.div`
  height: 34px;
  min-width: 34px;
`;
