import homeTranslations from "./translations-home";
import locationTranslations from "./translations-locations";
import infoTranslations from "./translations-info";
import programmeTranslations from "./translations-programme";

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
    return null;
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
  location: locationTranslations,
  navigation: {
    menu: {
      en: "Menu",
      fr: "Le Menu"
    },
    home: {
      en: "Home",
      fr: "Accueil"
    },
    locations: {
      en: "Locations",
      fr: "Locations"
    },
    timeline: {
      en: "Programme",
      fr: "Programme"
    },
    info: {
      en: "Other Info",
      fr: "Autres Infos"
    }
  },
  info: infoTranslations,
  programme: programmeTranslations,
  scrollNav: {
    close: {
      en: "Close",
      fr: "Fermez"
    },
    sections: {
      en: "Sections",
      fr: "Sections"
    }
  },
  switcher: {
    en: "In English",
    fr: "En Français"
  }
};
