import React from "react";
import {
  ContactsDesc,
  ContactsDiv,
  ContactsSection,
  ContactsTitle,
  FormDiv,
  InputDiv,
  MessageTitleDiv,
  StyledInput,
  StyledLabel,
  StyledSendBtn,
  StyledTextArea,
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
          <InputDiv>
            <StyledInput
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />
            <StyledLabel htmlFor="name" className="form_label">
              Nome
            </StyledLabel>
          </InputDiv>
          <InputDiv>
            <StyledInput
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
            <StyledLabel htmlFor="email" className="form_label">
              E-mail
            </StyledLabel>
          </InputDiv>
          <InputDiv>
            <StyledInput
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telefono"
              required
            />
            <StyledLabel htmlFor="tel" className="form_label">
              Telefono
            </StyledLabel>
          </InputDiv>
          <StyledTextArea
            placeholder="Scrivi un messaggio"
            name="message"
            id="message"
            cols="35"
            rows="8"
          ></StyledTextArea>
          <StyledSendBtn type="submit">Invia</StyledSendBtn>
        </FormDiv>
      </ContactsDiv>
    </ContactsSection>
  );
};

export default MailForm;
