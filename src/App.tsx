import "./App.css";

import styled from "styled-components";

import { MainCardComponent } from "./components/main-card/main-card-component";
import { PersonalInfoCardComponent } from "./components/personal-info-card/personal-info-card-component";
import { EmergencyContactsCardComponent } from "./components/emergency-contacts-card/emergency-contacts-card-component";
import { HeartRateCardComponent } from "./components/heart-rate-card/heart-rate-card-component";
import { HabitsCardComponent } from "./components/habits-card/habits-card-component";
import { ImportantEventsCardComponent } from "./components/important-events-card/important-events-card-component";
import { MedicineCardComponent } from "./components/medicine-card/medicine-card-component";
import { ProfessionalCardComponent } from "./components/professional-card/professional-card-component";
import { MedicalHistoryCardComponent } from "./components/medical-history-card/medical-history-card-component";
import { ExercisesCardComponent } from "./components/exercises-card/exercises-card-component";

export enum ScreenSizes {
  desktop = "992px",
  laptop = "992px",
  tablet = "768px",
  phone = "600px",
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SectionContainer = styled.section`
  /* display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 32px; */
  display: flex;
  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

  border: 1px solid white;
  /* width: clamp(100px, 80vw, 340px); */

  /* height: 440px; */
`;

const Test = styled.main`
  max-width: 1342px;
  margin: auto;

  display: grid;
  grid-gap: 20px;

  /* height: fit-content; */

  /* border: 1px solid purple; */
`;

const FirstGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.desktop}) {
    grid-gap: 2%;
    grid-template: "profile emergency heart" 1fr / 30% 20% 46%;
  }

  @media screen and (max-width: ${ScreenSizes.desktop}) and (min-width: ${ScreenSizes.phone}) {
    grid-template:
      "profile emergency" 1fr
      "heart heart" 1fr;
    /* / calc(60% + 20px) calc(36% + 20px); */
  }

  @media screen and (max-width: ${ScreenSizes.phone}) {
    grid-template:
      "profile"
      "emergency"
      "heart";
  }
  grid-template-columns: 1fr;
`;

const SecondGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.desktop}) {
    grid-gap: 2%;

    grid-template: "habits events medicine" 1fr / 25% 35% 36%;
  }

  @media screen and (max-width: ${ScreenSizes.desktop}) and (min-width: ${ScreenSizes.phone}) {
    grid-template:
      "habits events" 1fr
      /* ". . ." 1em */
      "medicine medicine" 1fr;
    /* / 42% 55%; */
  }

  @media screen and (max-width: ${ScreenSizes.phone}) {
    /* grid-template:
      "habits" 1fr
      "events" 1fr
      "medicine" 224px;
      */
    grid-template: "habits" "events" "medicine";
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    /* 
      
      */
  }
`;

const ThirdGrid = styled.section`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: ${ScreenSizes.desktop}) {
    grid-gap: 2%;

    grid-template: "professional history exercises" 1fr / 25% 40% 31%;
  }

  @media screen and (max-width: ${ScreenSizes.desktop}) and (min-width: ${ScreenSizes.phone}) {
    grid-template:
      "professional history" 1fr
      "exercises exercises" 1fr;
    /* / 49% 49%; */
    /* / 42% 56%; */
  }

  @media screen and (max-width: ${ScreenSizes.phone}) {
    grid-template:
      "professional"
      "history"
      "exercises";
  }
  grid-template-columns: 1fr;
  /* 

   */
`;
const Professional = styled.div`
  grid-area: professional;

  background: purple;
`;
const History = styled.div`
  grid-area: history;

  background: blue;
`;
const Exercises = styled.div`
  grid-area: exercises;

  background: brown;
`;

// const PersonalInfoCard = styled(PersonalInfoCardComponent)`
//   grid-area: profile;

//   border: 1px solid blue;
// `;

function App() {
  return (
    // <MainContainer>
    //   <SectionContainer>
    //     <div>
    //       <MainCardComponent>
    //         <PersonalInfoCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <EmergencyContactsCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <HeartRateCardComponent />
    //       </MainCardComponent>
    //     </div>
    //   </SectionContainer>
    //   <SectionContainer>
    //     <div>
    //       <MainCardComponent>
    //         <HabitsCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <ImportantEventsCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <MedicineCardComponent />
    //       </MainCardComponent>
    //     </div>
    //   </SectionContainer>
    //   <SectionContainer>
    //     <div>
    //       <MainCardComponent>
    //         <ProfessionalCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <MedicalHistoryCardComponent />
    //       </MainCardComponent>
    //     </div>
    //     <div>
    //       <MainCardComponent>
    //         <ExercisesCardComponent />
    //       </MainCardComponent>
    //     </div>
    //   </SectionContainer>
    // </MainContainer>
    <Test>
      <FirstGrid>
        <PersonalInfoCardComponent />
        <EmergencyContactsCardComponent />
        <HeartRateCardComponent />
      </FirstGrid>
      <SecondGrid>
        <HabitsCardComponent />
        <ImportantEventsCardComponent />
        <MedicineCardComponent />
      </SecondGrid>
      <ThirdGrid>
        <ProfessionalCardComponent />
        <MedicalHistoryCardComponent />
        <ExercisesCardComponent />
      </ThirdGrid>
    </Test>
  );
}

export default App;
