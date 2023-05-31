import styled from "styled-components";

export const DividerComponent = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.color};
  border-radius: var(--border-radius);
`;
