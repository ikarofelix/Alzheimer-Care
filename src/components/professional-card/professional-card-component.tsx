import { MainCardComponent } from "../main-card/main-card-component";
import {
  ProfessionalCard,
  ProfessionalContactList,
  ProfessionalContact,
} from "./professional-card-styles";
import { DividerComponent } from "../divider/divider-component";
import { CallButton } from "../call-button/call-button-component";
import { CallButtonColor } from "../call-button/call-button-component";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";

export const ProfessionalCardComponent = () => {
  const { professional_card } = useAppSelector(currentUserSelector);

  return (
    <MainCardComponent>
      <ProfessionalCard>
        <h3>Contatos Profissionais</h3>
        <ProfessionalContactList>
          {professional_card && professional_card.length ? (
            professional_card.slice(0, 4).map((item) => {
              return (
                <ProfessionalContact>
                  <p>{item.name}</p>
                  <DividerComponent color="var(--text-white)" />
                  <p>{item.job}</p>
                  <CallButton color={CallButtonColor.purple} href={`tel:${item.phone_number}`}>
                    Ligar
                  </CallButton>
                </ProfessionalContact>
              );
            })
          ) : (
            <p>Você não possui contato profissional</p>
          )}
        </ProfessionalContactList>
      </ProfessionalCard>
    </MainCardComponent>
  );
};
