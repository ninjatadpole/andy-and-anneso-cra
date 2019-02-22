import React from "react";

import DropCap from "../components/drop-cap";

export default {
  title: {
    en: <DropCap>Programme</DropCap>,
    fr: <DropCap>Le Programme</DropCap>
  },
  metaTitle: {
    en: "Programme",
    fr: "Le Programme"
  },
  ceremony: {
    title: {
      en: "Ceremony",
      fr: "La Cérémonie"
    },
    arrival: {
      title: {
        en: "Guests arrive",
        fr: "Arrivée des invités"
      },
      subtitle: {
        en: (
          <>
            Islington Town Hall, Islington{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/NXHVM4mU77F2" target="town-hall">
                map
              </a>
              )
            </span>
          </>
        ),
        fr: (
          <>
            Islington Town Hall (Mairie){" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/NXHVM4mU77F2" target="town-hall">
                carte
              </a>
              )
            </span>
          </>
        )
      },
      note: {
        en: "Family and full-day guests are requested to arrive at 11:30",
        fr:
          "Les familles et amis invités à la cérémonie sont priés d'arriver à 11h30."
      }
    },
    ceremony: {
      title: {
        en: "Ceremony",
        fr: "Cérémonie"
      }
    },
    blessing: {
      title: {
        en: "Blessing",
        fr: "Bénédiction"
      },
      subtitle: {
        en: "Islington public gardens",
        fr: "Les jardins publics d'Islington"
      },
      note: {
        en: "The gardens are a short (5 minute) walk from the ceremony.",
        fr: "Les jardins se trouvent à 5 mins à pied de la Mairie."
      }
    },
    photos: {
      title: {
        en: "Photographs",
        fr: "Photos"
      },
      subtitle: {
        en: "Islington public gardens",
        fr: "Les jardins publics d'Islington"
      }
    },
    transport: {
      title: {
        en: "Transport to the reception",
        fr: "Transport jusqu'à la réception"
      },
      note: {
        en:
          "All guests will be provided with traditional journeys to the reception.",
        fr: "Un transport sera organisé."
      }
    },
    welcome: {
      title: "Vin d'honneur",
      subtitle: {
        en: (
          <>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                map
              </a>
              )
            </span>
          </>
        ),
        fr: (
          <>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                carte
              </a>
              )
            </span>
          </>
        )
      },
      note: {
        en: "Cannapés, bubbles and greetings.",
        fr: "Canapés et bulles."
      }
    },
    lunch: {
      title: {
        en: "Wedding breakfast",
        fr: "Repas de mariage"
      },
      note: {
        en:
          "We will contact our full-day guests for menu preferences before the day.",
        fr:
          "Nous contacterons, avant le mariage, les invités concernant le menu."
      }
    }
  },
  party: {
    title: {
      en: "Celebration",
      fr: "La Fête"
    },
    party: {
      title: {
        en: "Party",
        fr: "Soiree dansante"
      },
      subtitle: {
        en: (
          <>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                map
              </a>
              )
            </span>
          </>
        ),
        fr: (
          <>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                carte
              </a>
              )
            </span>
          </>
        )
      },
      note: {
        en:
          "All guests are invited to join us for music, games and celebration.",
        fr: "Tout les invités nous rejoignent pour célébrer."
      }
    },
    buffet: {
      title: {
        en: "Evening buffet",
        fr: "Buffet"
      }
    },
    carriages: {
      title: {
        en: "Carriages",
        fr: "Bonne nuit!"
      },
      subtitle: {
        en: "(Hackney carriages)",
        fr: ""
      }
    }
  }
};
