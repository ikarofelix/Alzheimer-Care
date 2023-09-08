import styled from "styled-components";

const HelpContainer = styled.div`
  height: 40px;
  cursor: pointer;

  p {
    display: none;
    padding: 2rem;
    border-radius: 8px;
    width: 30vw;
    max-width: 50rem;
    background-color: var(--text-white);
    box-shadow: 0 0 1px 1px var(--purple-dark);
  }

  :hover p,
  p:hover {
    display: block;
    position: absolute;
    z-index: 99;
  }
`;

export const HelpComponent = () => {
  return (
    <HelpContainer>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z"
            fill="#b847cd"
          ></path>{" "}
        </g>
      </svg>
      <p>
        A opção de adicionar conteúdo ainda não está disponível, como você pode verificar no menu de
        atualizações na página do projeto no GitHub. Para entender melhor como funciona uma conta
        com informações, por favor, faça logout da sua conta atual e faça login utilizando a conta
        demo disponível na página de login.
      </p>
    </HelpContainer>
  );
};
