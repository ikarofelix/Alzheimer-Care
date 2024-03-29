import {
  MainContainer,
  FirstGrid,
  SecondGrid,
  ThirdGrid,
  Dashboard,
  NavBar,
  LogoutContainer,
} from "./dashboard-styles";
import { HelpComponent } from "../../components/help/help-component";
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
import AlzheimerCareIcon from "../../assets/dashboard/alzheimer-care-icon.png";
import { signOutUserHandler } from "../../handlers/sign-user";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";
import { useState, useEffect } from "react";

export const DashboardPage = () => {
  const { address } = useAppSelector(currentUserSelector);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    if (address === "") {
      setIsNewUser(true);
    }
  }, [address]);

  const LogUserOut = async () => {
    try {
      await signOutUserHandler();
    } catch (err) {
      throw err;
    }
  };

  return (
    <Dashboard>
      <NavBar>
        <a href="">
          <img src={AlzheimerCareIcon} alt="Logo Alzheimer Care na cor roxa" />
        </a>
      </NavBar>
      <MainContainer>
        <LogoutContainer>
          {isNewUser && <HelpComponent />}
          <a title="Sair" onClick={LogUserOut}>
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
