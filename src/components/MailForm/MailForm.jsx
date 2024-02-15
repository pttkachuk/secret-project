import React, { useEffect, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactsDesc,
  ContactsDiv,
  ContactsSection,
  ContactsTitle,
  FormDiv,
  Gradient,
  InputDiv,
  MessageTitleDiv,
  PhoneDiv,
  PhoneDivTitle,
  PhoneImage,
  PhoneTitleDiv,
  StyledInput,
  StyledLabel,
  StyledPhoneItem,
  StyledPhoneLink,
  StyledPhoneList,
  StyledPhoneTitle,
  StyledSendBtn,
  StyledTextArea,
} from "./MailFormStyled";
import Petro_Gr from "../../images/Petro_Gr.jpg";
import Ivan_Tk from "../../images/Ivan_Tk.jpg";
import emailjs from "@emailjs/browser";

const MailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("ddcE72HyXFwm_kWLi");
  }, []);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setText("");
  };

  const SendMessage = async () => {
    const serviceId = "service_fog40os";
    const templateId = "template_qlau7y5";

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
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
          from_name: name,
          from_email: email,
          from_phone: phoneNumber,
          message: text,
        });
        alert("email successfully sent check inbox");
      } catch (error) {
        console.log(error);
      } finally {
        clearForm();
        setLoading(false);
      }
      //alert(JSON.stringify([name, email, phoneNumber, text], null, 2));
      //clearForm();
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
          <StyledSendBtn type="button" onClick={SendMessage} disabled={loading}>
            Invia
          </StyledSendBtn>
        </FormDiv>
      </ContactsDiv>
      <Gradient />
      <PhoneDiv>
        <div>
          <StyledPhoneList>
            <StyledPhoneItem>
              <PhoneImage
                src={Petro_Gr}
                alt="Petro Gryfel"
                width={120}
                height={120}
              />
              <div>
                <StyledPhoneTitle>
                  <b>Pastore</b>
                  <br />
                  Petro Gryfel
                </StyledPhoneTitle>
                <StyledPhoneLink href="tel:+000000000000">
                  +00 000 000 0000
                </StyledPhoneLink>
              </div>
            </StyledPhoneItem>
            <StyledPhoneItem>
              <PhoneImage
                src={Ivan_Tk}
                alt="Ivan Tkachuk"
                width={120}
                height={120}
              />
              <div>
                <StyledPhoneTitle>
                  <b>Responsabile finanziario</b>
                  <br /> Ivan Tkachuk
                </StyledPhoneTitle>
                <StyledPhoneLink href="tel:+000000000000">
                  +00 000 000 0000
                </StyledPhoneLink>
              </div>
            </StyledPhoneItem>
          </StyledPhoneList>
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
