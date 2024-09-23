import React from "react";
import { useTranslation } from "react-i18next";

const LangSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value); // Cambia la lingua in base al valore selezionato
  };

  return (
    <div>
      <select onChange={changeLanguage} defaultValue={i18n.lng}>
        <option value="ua">Українська</option>
        <option value="ru">Руский</option>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LangSelect;
