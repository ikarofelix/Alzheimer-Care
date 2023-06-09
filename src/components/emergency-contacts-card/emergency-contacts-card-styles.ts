import styled from "styled-components";

export const EmergencyContactsCard = styled.div`
  /* grid-area: emergency; */
  /* grid-column: 1/2; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* gap: 20px; */

  height: 100%;

  /* border: 1px solid black; */

  h3 {
    width: 100%;
    text-align: left;
    /* border: 1px solid; */
  }
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  /* box-sizing: border-box; */
  /* justify-content: space-around; */
  /* justify-content: space-around; */
  /* width: 100%; */
  gap: 20px;
  height: 100%;

  /* border: 1px solid; */
`;

export const Contact = styled.div`
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 5px 1em;
  max-width: 110px;
  /* width: 90%; */
  /* 
   */
  /* height: 60px; */
  /*
  */

  /* :not(:first-child):not(:last-child) {
    margin: 15px 0px;
  } */

  h4,
  p {
    margin: 0;

    /* border: 1px solid purple; */

    /* width: 10px; */
    /* height: 1.5em; */
    /* width: 100%;
    height: 20px; */

    /* text-align: left; */
    /* text-overflow: clip; */
    /* white-space: nowrap; */
    /* word-break: break-all;
    overflow: hidden; */

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
