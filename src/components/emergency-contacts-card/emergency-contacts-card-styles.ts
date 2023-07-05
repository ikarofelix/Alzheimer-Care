import styled from "styled-components";

export const EmergencyContactsCard = styled.div`
  grid-area: emergency;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  h3 {
    width: 100%;
    text-align: left;
  }
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 20px;
  height: 100%;
`;

export const Contact = styled.div`
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 5px 1em;
  max-width: 110px;

  h4,
  p {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
