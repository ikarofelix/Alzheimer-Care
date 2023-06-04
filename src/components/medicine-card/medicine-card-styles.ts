import styled from "styled-components";

export const MedicineCard = styled.div`
  width: clamp(100px, 80vw, 470px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MedicineList = styled.ul`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 1rem;
  place-items: center;
  padding: 0;
`;

export const Medicine = styled.li`
  padding: 10px 10px;
  max-width: min(80%, 120px);
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
  text-overflow: ellipsis;

  white-space: nowrap;

  span {
    font-weight: 500;
  }
`;
