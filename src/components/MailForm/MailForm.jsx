import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactsDesc,
  ContactsDiv,
  ContactsSection,
  ContactsTitle,
  FormDiv,
  InputDiv,
  MessageTitleDiv,
  PhoneDiv,
  PhoneDivTitle,
  PhoneTitleDiv,
  StyledInput,
  StyledLabel,
  StyledPhoneItem,
  StyledPhoneLink,
  StyledPhoneTitle,
  StyledSendBtn,
  StyledTextArea,
} from "./MailFormStyled";
//import BubbleTrouble from "../BubbleTrouble/BubbleTrouble";

const MailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setText("");
  };

  const SendMessage = () => {
    if (!name || !email || !phoneNumber || !text) {
      toast.info("Compilare tutti i campi", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      alert(JSON.stringify([name, email, phoneNumber, text], null, 2));
      clearForm();
    }
  };

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
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
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
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
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
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            cols="35"
            rows="8"
          ></StyledTextArea>
          <StyledSendBtn type="button" onClick={SendMessage}>
            Invia
          </StyledSendBtn>
        </FormDiv>
      </ContactsDiv>
      <PhoneDiv>
        <div>
          <ul>
            <StyledPhoneItem>
              <StyledPhoneTitle>
                <b>Pastore</b>
                <br />
                Petro Gryfel
              </StyledPhoneTitle>
              <StyledPhoneLink href="tel:+393272229054">
                +39 327 222 9054
              </StyledPhoneLink>
            </StyledPhoneItem>
            <StyledPhoneItem>
              <StyledPhoneTitle>
                <b>Responsabile finanziario</b> <br /> Ivan Tkachuk
              </StyledPhoneTitle>
              <StyledPhoneLink href="tel:+393273541039">
                +39 327 354 1039
              </StyledPhoneLink>
            </StyledPhoneItem>
          </ul>
        </div>
        <PhoneTitleDiv>
          <PhoneDivTitle>Oppure chiamaci direttamente!</PhoneDivTitle>
        </PhoneTitleDiv>
      </PhoneDiv>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </ContactsSection>
  );
};

export default MailForm;
