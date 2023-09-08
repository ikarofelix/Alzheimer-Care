import styled from "styled-components";

enum ScreenSizes {
  large = "992px",
  small = "600px",
}

export const Dashboard = styled.div`
  max-width: 1342px;
  margin: auto;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  img {
    width: 100%;
  }
`;

export const MainContainer = styled.main`
  padding: 1em;
  margin: auto;
  display: grid;
  grid-gap: 20px;
`;

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;

  a {
    cursor: pointer;
  }
`;

export const FirstGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.large}) {
    grid-gap: 2%;
    grid-template: "profile emergency heart" 1fr / 30% 20% 46%;
  }

  @media screen and (max-width: ${ScreenSizes.large}) and (min-width: ${ScreenSizes.small}) {
    grid-template:
      "profile emergency" 1fr
      "heart heart" 1fr;
  }

  @media screen and (max-width: ${ScreenSizes.small}) {
    grid-template:
      "profile"
      "emergency"
      "heart" 20em;
  }
  grid-template-columns: 1fr;
`;

export const SecondGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.large}) {
    grid-gap: 2%;
    grid-template: "communication events medicine" 1fr / 25% 35% 36%;
  }

  @media screen and (max-width: ${ScreenSizes.large}) and (min-width: ${ScreenSizes.small}) {
    grid-template:
      "communication events" 1fr
      "medicine medicine" 1fr;
  }

  @media screen and (max-width: ${ScreenSizes.small}) {
    grid-template: "communication" "events" "medicine";
    grid-template-columns: 1fr;
  }
`;

export const ThirdGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.large}) {
    grid-gap: 2%;

    grid-template: "professional history exercises" 1fr / 25% 40% 31%;
  }

  @media screen and (max-width: ${ScreenSizes.large}) and (min-width: ${ScreenSizes.small}) {
    grid-template:
      "professional history" 1fr
      "exercises exercises" 1fr;
  }

  @media screen and (max-width: ${ScreenSizes.small}) {
    grid-template:
      "professional"
      "history"
      "exercises";
  }
  grid-template-columns: 1fr;
`;
