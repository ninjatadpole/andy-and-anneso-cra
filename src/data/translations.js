import React from "react";

import homeTranslations from "./translations-home";
import questionTranslations from "./translations-questions";

export function translate(key, language) {
  const result = searchObj(key, STRINGS);

  if (result !== null) {
    if (result[language] !== undefined) {
      return result[language];
    } else {
      return result;
    }
  } else {
    return key;
  }
}

function searchObj(key = "", dictionary = {}) {
  const result = recurseObjectProps(key.split("."), dictionary);

  return result || key;
}

function recurseObjectProps(propArray, propObject) {
  return propArray.reduce((obj, prop) => {
    if (obj) {
      if (obj[prop]) {
        return obj[prop];
      }
      if (prop.indexOf("[") !== -1) {
        const splitIndex = prop.replace("]", "").split("[");
        return recurseObjectProps(splitIndex, obj);
      }
    }
  }, propObject);
}

export const STRINGS = {
  global: {
    title: {
      en: "Andy & Anne-So - August 24th 2019",
      fr: "Anne-So & Andy - le 24 Août 2019"
    }
  },
  home: homeTranslations,
  map: {
    title: {
      en: "Map",
      fr: "Carte"
    },
    ceremony: {
      en: "Ceremony: Islington Town Hall",
      fr: "La Cérémonie: La Mairie"
    },
    party: {
      en: "Celebration: The Depot",
      fr: "La Fête: Le Depot"
    }
  },
  questions: questionTranslations,
  switcher: {
    en: "In English",
    fr: "En Français"
  }
};
