// import styled from "styled-components";

// export const MedicineCard = styled.div`
//   /* width: clamp(100px, 80vw, 470px); */
//   grid-area: medicine;

//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   border: 1px solid white;
// `;

// export const MedicineList = styled.ul`
//   width: 100%;
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
//   grid-gap: 1rem;
//   place-items: center;
//   padding: 0;

//   border: 1px solid;
// `;

// export const Medicine = styled.li`
//   padding: 10px 10px;
//   max-width: min(80%, 120px);
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   background: var(--linear-purple);
//   color: var(--text-white);
//   border-radius: var(--border-radius);

//   p {
//     margin: 0;
//   }
// `;

// export const MedicineTitle = styled.div`
//   overflow: hidden;
//   text-overflow: ellipsis;

//   white-space: nowrap;

//   span {
//     font-weight: 500;
//   }
// `;

import styled from "styled-components";

export const MedicineCard = styled.div`
  /* width: clamp(100px, 80vw, 470px); */
  grid-area: medicine;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* border: 1px solid white; */
`;

export const MedicineList = styled.ul`
  /* width: 100%; */
  width: fit-content;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  padding: 0;

  /* box-sizing: border-box; */

  /* border: 1px solid; */
`;

export const Medicine = styled.li`
  padding: 10px 10px;
  width: clamp(80px, 25%, 200px);
  /* min-width: 80px;
  max-width: 200px; */
  /* max-width: min(80%, 120px); */
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: var(--linear-purple);
  color: var(--text-white);
  border-radius: var(--border-radius);

  p {
    margin: 0;
  }
`;

export const MedicineTitle = styled.div`
  overflow: hidden;

  height: 1.5em;
  /* border: 1px solid; */

  /* text-overflow: ellipsis;

  white-space: nowrap; */

  span {
    font-weight: 500;
  }
`;
