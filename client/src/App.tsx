import { MainContainer, FirstGrid, SecondGrid, ThirdGrid } from "./app-styles";
import { PersonalInfoCardComponent } from "./components/personal-info-card/personal-info-card-component";
import { EmergencyContactsCardComponent } from "./components/emergency-contacts-card/emergency-contacts-card-component";
import { HeartRateCardComponent } from "./components/heart-rate-card/heart-rate-card-component";
import { HabitsCardComponent } from "./components/habits-card/habits-card-component";
import { ImportantEventsCardComponent } from "./components/important-events-card/important-events-card-component";
import { MedicineCardComponent } from "./components/medicine-card/medicine-card-component";
import { ProfessionalCardComponent } from "./components/professional-card/professional-card-component";
import { MedicalHistoryCardComponent } from "./components/medical-history-card/medical-history-card-component";
import { ExercisesCardComponent } from "./components/exercises-card/exercises-card-component";

import { SignUpRoute } from "./routes/signup/signup-route";
import { SignInRoute } from "./routes/signin/signin-route";

function App() {
  return (
    // <SignUpRoute />
    <SignInRoute />
    // <MainContainer>
    //   <FirstGrid>
    //     <PersonalInfoCardComponent />
    //     <EmergencyContactsCardComponent />
    //     <HeartRateCardComponent />
    //   </FirstGrid>
    //   <SecondGrid>
    //     <HabitsCardComponent />
    //     <ImportantEventsCardComponent />
    //     <MedicineCardComponent />
    //   </SecondGrid>
    //   <ThirdGrid>
    //     <ProfessionalCardComponent />
    //     <MedicalHistoryCardComponent />
    //     <ExercisesCardComponent />
    //   </ThirdGrid>
    // </MainContainer>
  );
}

export default App;
