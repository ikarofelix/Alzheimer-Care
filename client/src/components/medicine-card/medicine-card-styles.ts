import styled from "styled-components";

export const MedicineCard = styled.div`
  grid-area: medicine;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  h3 {
    text-align: left;
  }
`;

export const MedicineList = styled.ul`
  width: fit-content;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
`;

export const Medicine = styled.li`
  padding: 10px 10px;
  width: clamp(90px, 25%, 200px);
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

  span {
    font-weight: 500;
  }
`;
