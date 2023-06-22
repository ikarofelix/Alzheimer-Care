import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-family: "Oxygen", sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color: var(--text-dark);
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        --solid-background-color: #D8DDE7;
        --main-card-bg: #f0f3fa;
        --main-card-filter: drop-shadow(0px 4px 4px #6f39b3);
        --main-card-border-radius: 16px;
        --border-radius: 8px;
        --linear-purple: linear-gradient(
            144.16deg,
            #e04cd6 -76.81%,
            #e04cd6 -35.97%,
            #d94bd3 4.87%,
            #b847cd 45.71%,
            #7935ae 86.55%,
            #6f39b3 127.39%
        );
        --linear-html-bg: linear-gradient(
            167.34deg,
            #dfe2eb 8.9%,
            #f0f3fa 33.58%,
            #bec5d2 63.8%,
            #8a95a8 90.61%
        );
        --text-dark: #3d3e41;
        --text-light: #909193;
        --text-white: #f5f8fe;
        --text-background: #ffffff;
        --purple-dark: #6f39b3;
        --orange-color: #fca568;
        

    }

    #root {
        margin: 0 auto;
        /* padding: 2rem; */
        text-align: center;
    }

    a {
        text-decoration: none;
        color: var(--text-dark);
    }

    h3 {
        font-weight: 700;
        font-size: clamp(16px, 3vw, 18px);
        line-height: 20px;
        color: var(--text-dark);
        margin: 4px 0;
    }

    h4,
    span {
        font-weight: 700;
        line-height: 18px;
    }

    p,
    a,
    span,
    h4 {
        font-size: clamp(12px, 1vw, 14px);
    }

    html {
        /* background: var(--linear-html-bg) fixed; */
        background: gray;
    }

    body {
        margin: 0;
    }

    input{
        font-family: "Oxygen", sans-serif;
    }
`;
