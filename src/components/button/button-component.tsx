import styled from "styled-components";

export enum ButtonComponentTypes {
  LoginButton = "var(--purple-dark)",
  GoogleLoginButton = "transparent",
}

export const ButtonComponent = styled.button`
  height: 50px;
  border-radius: 8px;
  background: ${(props) => props.color};
  border: ${(props) =>
    props.color === ButtonComponentTypes.LoginButton ? "0" : "1px solid #909193"};
  color: ${(props) =>
    props.color === ButtonComponentTypes.LoginButton ? "var(--text-white)" : "var(--text-dark)"};
  cursor: pointer;
`;
