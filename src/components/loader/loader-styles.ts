import styled, { keyframes } from "styled-components";

export const dotRectAnimation = keyframes`
  25% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(18px, -18px);
  }
  75% {
    transform: translate(0, -36px);
  }
  100% {
    transform: translate(-18px, -18px);
  }
`;

export const pathCircleAnimation = keyframes`
  25% {
    stroke-dashoffset: 125;
  }
  50% {
    stroke-dashoffset: 175;
  }
  75% {
    stroke-dashoffset: 225;
  }
  100% {
    stroke-dashoffset: 275;
  }
`;

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;
    img {
      display: block;
      height: 28px;
    }
  }
`;

export const Loader = styled.div`
  display: inline-block;
  margin: 0 16px;
  --path: #d31cc7;
  --dot: var(--linear-purple);
  --duration: 3s;
  width: 44px;
  height: 44px;
  position: relative;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 37px;
    left: 19px;
    transform: translate(-18px, -18px);
    animation: ${dotRectAnimation} var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;

    circle {
      fill: none;
      stroke: var(--path);
      stroke-width: 10px;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke-dasharray: calc(200px / 4 * 3) calc(200px / 4) calc(200px / 4 * 3) calc(200px / 4);
      stroke-dashoffset: 75;
      animation: ${pathCircleAnimation} var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
        infinite;
    }
  }
`;
