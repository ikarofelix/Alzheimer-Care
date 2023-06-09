// import styled from "styled-components";

// export const ProfessionalCard = styled.div`
//   /* width: clamp(100px, 80vw, 340px); */
//   grid-area: professional;

//   border: 1px solid green;

//   height: 100%;

//   /* width: 281px; */
//   /* height: 235px; */

//   h3 {
//     text-align: left;
//   }
// `;

// export const ProfessionalContactList = styled.div`
//   /* display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   padding: 10px;
//   justify-content: center; */

//   display: grid;
//   /* grid-template-columns: repeat(2, 1fr); */
//   grid-template-columns: repeat(auto-fill, minmax(47%, 1fr));

//   /* justify-content: space-around; */
//   /* align-content: space-between; */
//   /* align-content: space-evenly; */
//   /* grid-gap: 15px; */

//   /* width: fit-content; */

//   /* height: 50%; */

//   grid-gap: 10px;
//   /* width: 85%; */

//   border: 1px solid blue;
// `;

// export const ProfessionalContact = styled.div`
//   background-color: var(--text-background);
//   border-radius: var(--border-radius);
//   padding: 0.5em;
//   /* width: 40%; */
//   /* min-width: 120px; */

//   /* width: 80%;
//   height: 80%; */
//   /* height: 80%; */

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 0.5em;

//   box-sizing: border-box;

//   border: 1px solid;

//   p:first-child {
//     font-weight: bold;
//   }

//   p,
//   span {
//     margin: 0;
//     /*
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     */
//     overflow: hidden;

//     width: 100%;
//     height: 20px;

//     /* word-break: break-all; */
//   }
// `;

import styled from "styled-components";

export const ProfessionalCard = styled.div`
  /* width: clamp(100px, 80vw, 340px); */
  grid-area: professional;

  /* border: 1px solid green; */

  height: 100%;

  /* width: 281px; */
  /* height: 235px; */

  h3 {
    text-align: left;
  }
`;

export const ProfessionalContactList = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center; */

  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-template-columns: repeat(auto-fill, minmax(47%, 1fr)); */

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  /* justify-content: space-around; */
  /* align-content: space-between; */
  /* align-content: space-evenly; */
  /* grid-gap: 15px; */

  /* width: fit-content; */

  /* height: 50%; */

  /* grid-gap: 10px; */
  /* width: 85%; */

  /* border: 1px solid blue; */
`;

export const ProfessionalContact = styled.div`
  background-color: var(--text-background);
  border-radius: var(--border-radius);
  padding: 0.5em;
  /* width: 40%; */
  /* min-width: 120px; */

  width: clamp(80px, 44%, 180px);

  /* width: 80%;
  height: 80%; */
  /* height: 80%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  box-sizing: border-box;

  /* border: 1px solid; */

  p:first-child {
    font-weight: bold;
  }

  p,
  span {
    margin: 0;
    /* 
    text-overflow: ellipsis;
    white-space: nowrap;
    */
    overflow: hidden;

    width: 100%;
    height: 20px;

    /* word-break: break-all; */
  }
`;
