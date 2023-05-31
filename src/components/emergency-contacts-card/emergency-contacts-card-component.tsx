import { EmergencyContactsCard, Contact } from "./emergency-contacts-card-styles";
import { CallButton } from "../call-button/call-button-component";

import { CallButtonColor } from "../call-button/call-button-component";

export const EmergencyContactsCardComponent = () => {
  return (
    <EmergencyContactsCard>
      <h3>Contatos de Emergência</h3>
      <div>
        <Contact>
          <h4>Juliana</h4>
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
        <Contact>
          <h4>Juliana</h4>
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
      </div>
      <CallButton role="button" color={CallButtonColor.red}>
        Emergência (SAMU)
      </CallButton>
    </EmergencyContactsCard>
  );
};
