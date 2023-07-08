import { MainCardComponent } from "../main-card/main-card-component";
import { EmergencyContactsCard, ContactsList, Contact } from "./emergency-contacts-card-styles";
import { CallButton } from "../call-button/call-button-component";
import { CallButtonColor } from "../call-button/call-button-component";
import { useAppSelector } from "../../redux/hooks";
import { currentUserSelector } from "../../redux/user/user-slice";

export const EmergencyContactsCardComponent = () => {
  const { emergency_card } = useAppSelector(currentUserSelector);

  return (
    <MainCardComponent>
      <EmergencyContactsCard>
        <h3>Contatos de Emergência</h3>
        <ContactsList>
          {emergency_card && emergency_card.length ? (
            emergency_card.slice(0, 3).map((contact) => {
              return (
                <Contact key={emergency_card.indexOf(contact)}>
                  <h4>{contact.name}</h4>
                  <p>{contact.phone_number}</p>
                  <CallButton
                    role="button"
                    color={CallButtonColor.purple}
                    href={`tel:+55${contact.phone_number}`}
                  >
                    Ligar
                  </CallButton>
                </Contact>
              );
            })
          ) : (
            <p>Você não possui contato de emergência</p>
          )}
        </ContactsList>
        <CallButton role="button" color={CallButtonColor.red} href="tel:192">
          Emergência (SAMU)
        </CallButton>
      </EmergencyContactsCard>
    </MainCardComponent>
  );
};
