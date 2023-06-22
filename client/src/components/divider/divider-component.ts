import styled from "styled-components";

export const DividerComponent = styled.div`
  width: 100%;
  border: 0.1em solid #f0f3fa;
  border-image: ${(props) => props.color} 1;
  border-radius: var(--border-radius);
`;
