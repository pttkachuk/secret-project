import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { selectStyles } from "./StyledLangSelect";

const LangSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (current) => {
    i18n.changeLanguage(current.value); // Cambia la lingua in base al valore selezionato
  };

  const langOptions = [
    { value: "ua", label: "🇺🇦" },
    { value: "ru", label: "🇷🇺" },
    { value: "it", label: "🇮🇹" },
    { value: "en", label: "🇬🇧" },
  ];

  return (
    <Select
      options={langOptions}
      onChange={changeLanguage}
      styles={selectStyles}
      defaultValue={langOptions[0]}
    />
  );
};

export default LangSelect;
