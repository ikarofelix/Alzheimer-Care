import styled from "styled-components";

export const LabelComponent = styled.label`
  display: block;
  font-weight: bold;
`;

export const InputComponent = styled.input`
  width: 100%;
  padding: 13px;
  box-sizing: border-box;

  border: 1px solid #909193;
  border-radius: 8px;
  background-color: transparent;

  :focus {
    border: 1px solid var(--purple-dark);
    outline: 0;
    box-shadow: 0 0 1px 1px var(--purple-dark);
  }

  :invalid {
    border: 1px solid red;
  }
`;
