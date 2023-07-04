import styled from "styled-components";

export const AuthPageContainer = styled.main`
  display: flex;
  align-items: center;

  min-height: 100vh;

  background: linear-gradient(90deg, var(--main-card-bg) 50%, var(--solid-background-color) 50%);

  @media screen and (max-width: 1024px) {
    background: var(--main-card-bg);
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const AuthSection = styled.section`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 22px;
  text-align: left;

  padding: 20px;

  box-sizing: border-box;

  p {
    text-align: center;
    font-weight: bold;
  }

  a {
    color: var(--purple-dark);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  width: 90%;
  max-width: 500px;
`;

export const AuthTitle = styled.div`
  h1 {
    font-size: 48px;
    margin: 0;

    word-break: break-all;
  }

  h3 {
    color: var(--text-light);
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GoogleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LogoContainer = styled.div`
  width: 50%;

  padding: 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30em;
    height: 30em;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    img {
      min-width: 100px;
      width: 20%;
      height: 20%;
    }
  }
`;
