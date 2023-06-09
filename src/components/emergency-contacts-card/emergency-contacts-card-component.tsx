import { MainCardComponent } from "../main-card/main-card-component";
import { EmergencyContactsCard, ContactsList, Contact } from "./emergency-contacts-card-styles";
import { CallButton } from "../call-button/call-button-component";
import { CallButtonColor } from "../call-button/call-button-component";

export const EmergencyContactsCardComponent = () => {
  return (
    <MainCardComponent>
      <EmergencyContactsCard>
        <h3>Contatos de Emergência</h3>
        <ContactsList>
          <Contact>
            <h4>Juliana Maria Henrique machado do nascimento augusto ribeiro desde santos</h4>
            <p>(31) 99743-2394</p>
            <CallButton role="button" color={CallButtonColor.purple}>
              Ligar
            </CallButton>
          </Contact>
          <Contact>
            <h4>Juliana</h4>
            <p>(31) 99743-2394</p>
            <CallButton role="button" color={CallButtonColor.purple}>
              Ligar
            </CallButton>
          </Contact>
          {/* 
          <Contact>
            <h4>Juliana</h4>
            <p>(31) 99743-2394</p>
            <CallButton role="button" color={CallButtonColor.purple}>
              Ligar
            </CallButton>
          </Contact> */}
          {/* <Contact>
            <h4>Juliana</h4>
            <p>(31) 99743-2394</p>
            <CallButton role="button" color={CallButtonColor.purple}>
              Ligar
            </CallButton>
          </Contact> */}
        </ContactsList>
        <CallButton role="button" color={CallButtonColor.red}>
          Emergência (SAMU)
        </CallButton>
      </EmergencyContactsCard>
    </MainCardComponent>
  );
};
