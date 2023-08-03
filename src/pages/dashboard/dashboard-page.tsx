import {
  MainContainer,
  FirstGrid,
  SecondGrid,
  ThirdGrid,
  Dashboard,
  NavBar,
  LogoutContainer,
} from "./dashboard-styles";
import { EmergencyContactsCardComponent } from "../../components/emergency-contacts-card/emergency-contacts-card-component";
import { ExercisesCardComponent } from "../../components/exercises-card/exercises-card-component";
import { CommunicationCardComponent } from "../../components/communication-card/communication-card-component";
import { HeartRateCardComponent } from "../../components/heart-rate-card/heart-rate-card-component";
import { ImportantEventsCardComponent } from "../../components/important-events-card/important-events-card-component";
import { MedicalHistoryCardComponent } from "../../components/medical-history-card/medical-history-card-component";
import { MedicineCardComponent } from "../../components/medicine-card/medicine-card-component";
import { PersonalInfoCardComponent } from "../../components/personal-info-card/personal-info-card-component";
import { ProfessionalCardComponent } from "../../components/professional-card/professional-card-component";
import { LogoutIcon } from "../../assets/dashboard/logout-icon";
import { useQuery } from "@apollo/client";
import { LOG_USER_OUT } from "../../queries/queries";
import AlzheimerCareIcon from "../../assets/dashboard/alzheimer-care-icon.png";

export const DashboardPage = () => {
  const LogUserOut = useQuery(LOG_USER_OUT);

  return (
    <Dashboard>
      <NavBar>
        <a href="">
          <img src={AlzheimerCareIcon} alt="Logo Alzheimer Care na cor roxa" />
        </a>
      </NavBar>
      <MainContainer>
        <LogoutContainer>
          <a href="" title="Sair" onClick={() => LogUserOut}>
            <LogoutIcon />
          </a>
        </LogoutContainer>
        <FirstGrid>
          <PersonalInfoCardComponent />
          <EmergencyContactsCardComponent />
          <HeartRateCardComponent />
        </FirstGrid>
        <SecondGrid>
          <CommunicationCardComponent />
          <ImportantEventsCardComponent />
          <MedicineCardComponent />
        </SecondGrid>
        <ThirdGrid>
          <ProfessionalCardComponent />
          <MedicalHistoryCardComponent />
          <ExercisesCardComponent />
        </ThirdGrid>
      </MainContainer>
    </Dashboard>
  );
};
