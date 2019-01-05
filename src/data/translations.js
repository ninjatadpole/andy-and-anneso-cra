import React from "react";

export function translate(key, language) {
  console.log("LANGUAGE", language);
  console.log("KEY", key);
  const result = searchObj(key, STRINGS);

  if (result[language] !== null) {
    return result[language];
  } else {
    return `${key}.${language}`;
  }
}

function searchObj(key = "", dictionary = {}) {
  const result = key
    .split(".")
    .reduce((obj, index) => (obj ? obj[index] : null), dictionary);

  return result || key;
}

export const STRINGS = {
  global: {
    title: {
      en: "Andy & Anne-So - August 24th 2019",
      fr: "Anne-So & Andy - le 24 Août 2019"
    }
  },
  home: {
    title: {
      en: "Andy & Anne-So - August 24th 2019",
      fr: "Anne-So & Andy - le 24 Août 2019"
    },
    line1: {
      en: "Come and join",
      fr: "Venez rejoindre"
    },
    line2: {
      en: (
        <React.Fragment>
          <span className="drop-cap">A</span>
          ndy & Anne-So
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          <span className="drop-cap">A</span>
          nne-So & Andy
        </React.Fragment>
      )
    },
    line3: {
      en: "to celebrate their wedding",
      fr: "pour leur mariage"
    },
    line4: {
      en: "Noon on the 24th August 2019",
      fr: "le 24 Août 2019 à midi"
    }
  },
  map: {
    ceremony: {
      en: "Ceremony: Islington Town Hall",
      fr: "La Cérémonie: La Mairie"
    },
    party: {
      en: "Celebration: The Depot",
      fr: "La Fête: Le Depot"
    }
  },
  questions: {
    title: { en: "Answers", fr: "Réponses" }
  },
  switcher: {
    en: "In English",
    fr: "En Français"
  }
};
