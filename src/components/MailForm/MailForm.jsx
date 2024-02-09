import React from "react";
import {
  ContactsDesc,
  ContactsDiv,
  ContactsSection,
  ContactsTitle,
  FormDiv,
  MessageTitleDiv,
} from "./MailFormStyled";
//import { validationSchema } from "../../helpers/validationSchema";

const MailForm = () => {
  return (
    <ContactsSection>
      <ContactsDiv>
        <MessageTitleDiv>
          <ContactsTitle>Hai delle domande?</ContactsTitle>
          <ContactsDesc>
            Scrivi una domanda, lascia un commento o chiedi dell'informazione e
            noi cercheremo di aiutarti!
          </ContactsDesc>
        </MessageTitleDiv>
        <FormDiv>
          <input type="text" name="name" id="name" placeholder="name" />
          <input type="email" name="email" id="email" placeholder="email" />
          <textarea
            placeholder="scrivici un messaggio"
            name="message"
            id="message"
            cols="30"
            rows="10"
            style={{ resize: "vertical" }}
          ></textarea>
          <button type="submit">Invia</button>
        </FormDiv>
      </ContactsDiv>
    </ContactsSection>
  );
};

export default MailForm;
