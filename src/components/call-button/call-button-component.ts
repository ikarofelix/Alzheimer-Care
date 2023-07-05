import styled from "styled-components";

export const CallButtonColor: {
  red: string;
  purple: string;
} = {
  red: "red",
  purple: "var(--linear-purple)",
};

export const CallButton = styled.a`
  color: var(--text-white);
  background: ${(props) => props.color};
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  padding: ${(props) => (props.color === "red" ? "8px 24px" : "3px 24px")};
`;
