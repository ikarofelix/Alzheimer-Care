import styled from "styled-components";

export const EmergencyContactsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Contact = styled.div`
  :not(:first-child):not(:last-child) {
    margin: 10px 0px;
  }

  h4,
  p {
    margin: 0;
  }
`;
