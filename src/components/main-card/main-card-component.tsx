import { ReactNode } from "react";
import styled from "styled-components";

const MainCard = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: var(--main-card-bg);
  border-radius: var(--main-card-border-radius);
  filter: var(--main-card-filter);
`;

export const MainCardComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MainCard>{children}</MainCard>;
};
