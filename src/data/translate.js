export default function translate(language, key) {
  if (!language || !STRINGS[language]) {
    return "";
  }

  if (!key || !STRINGS[language][key]) {
    return key;
  }

  return STRINGS[language][key];
}

const STRINGS = {
  en: {
    siteTitle: "Andy & Anne-So - August 24th 2019",
    homeLine1: "Come and join",
    homeLine2: "Andy & Anne-So",
    homeLine3: "to celebrate their wedding",
    homeLine4: "Noon on the 24th August 2019",
    "languageSwitcher-en": "In English",
    "languageSwitcher-fr": "En Français"
  },
  fr: {
    siteTitle: "Anne-So & Andy - le 24 Août 2019",
    homeLine1: "Venez rejoindre",
    homeLine2: "Anne-So & Andy",
    homeLine3: "pour leur mariage",
    homeLine4: "le 24 Août 2019 à midi",
    "languageSwitcher-en": "In English",
    "languageSwitcher-fr": "En Français"
  }
};
