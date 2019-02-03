import React from "react";
import { Link } from "react-router-dom";

import DropCap from "../components/drop-cap";

const BEFORE_QUESTIONS = [
  {
    q: {
      en: "By when should I RSVP?",
      fr: "Quand devrais-je confirmer ma présence?"
    },
    a: {
      en: `Please let us know who is coming by the end of April. We will then let you know about menus, ask for your preferences and so on.`,
      fr: `S'il vous plaît laissez-nous savoir qui vient d'ici la fin avril. Nous allons alors vous informer sur les menus, demander vos préférences et ainsi de suite.`
    }
  },
  {
    q: {
      en: `Should I send my RSVP back in the post or can I reply online?`,
      fr: `Devrais-je renvoyer ma réponse par la poste ou puis-je répondre en ligne?`
    },
    a: {
      en: (
        <React.Fragment>
          You can write to us at
          <br />
          <span className="address">
            Flat 1, 34 Gloucester Drive, London, N4 2LN
          </span>
          or you can email us at{" "}
          <a href="mailto:hello@andyandanneso.com">hello@andyandanneso.com</a>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Vous pouvez nous écrire à<br />
          <span className="address">
            Flat 1, 34 Gloucester Drive, Londres, N4 2LN
          </span>
          ou vous pouvez nous envoyer un email à{" "}
          <a href="mailto:hello@andyandanneso.com">hello@andyandanneso.com</a>
        </React.Fragment>
      )
    }
  },
  {
    q: {
      en: "Can you recommend any local accommodation?",
      fr: "Pouvez-vous recommander un hébergement à proximité?"
    },
    a: {
      en: (
        <React.Fragment>
          We can! <Link to="/map">Check out the maps here</Link>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Nous pouvans! <Link to="/map">Découvrez les cartes ici</Link>
        </React.Fragment>
      )
    }
  }
];

const CEREMONY_QUESTIONS = [
  {
    q: {
      en: "Where is the ceremony?",
      fr: "Où est la cérémonie?"
    },
    a: {
      en: (
        <React.Fragment>
          The ceremony is being held at{" "}
          <span className="address">Islington Town Hall, London, N1 2UD</span>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          La cérémonie a lieu à{" "}
          <span className="address">Islington Town Hall, Londres, N1 2UD</span>
        </React.Fragment>
      )
    }
  },
  {
    q: {
      en: "At what time should I arrive?",
      fr: "A quelle heure dois-je arriver?"
    },
    a: {
      en:
        "The ceremony is at noon. Please arrive a little bit early so that you can wait nervously for the bride.",
      fr:
        "La cérémonie est à midi. S'il vous plaît arriver un peu tôt pour que vous pouvez attendre nerveusement pour la mariée."
    }
  },
  {
    q: {
      en: "Can I bring my dog/cat/frog?",
      fr: "Puis-je amener mon chien / chat / grenouille?"
    },
    a: {
      en:
        "You can, but they won’t be allowed into the ceremony and would need to be secured outside the Town Hall.",
      fr:
        "Vous pouvez le faire, mais ils ne seront pas autorisés à assister à la cérémonie et devront être sécurisés à l’extérieur de la mairie."
    }
  },
  {
    q: {
      en: "Can I bring my children?",
      fr: "Puis-je amener mes enfants?"
    },
    a: {
      en: "Of course! Just let us when you respond to the invite.",
      fr: "Bien sûr! Laissez-nous juste quand vous répondez à l'invitation."
    }
  },
  {
    q: {
      en: "Is there a dress code?",
      fr: "Y at-il un code vestimentaire?"
    },
    a: {
      en:
        "Wear whatever you want. Feel free to bring funky props for the party!",
      fr:
        "Portez ce que vous voulez. N'hésitez pas à apporter des accessoires géniaux pour la fête!"
    }
  },
  {
    q: {
      en: "Will there be transport between the ceremony and the party?",
      fr: "Y aura-t-il un transport entre la cérémonie et la fête?"
    },
    a: {
      en:
        "There will. Just stay with the group and everything will be taken care of.",
      fr:
        "Il y aura. Il suffit de rester avec le groupe et tout sera pris en charge."
    }
  }
];

const PARTY_QUESTIONS = [
  {
    q: {
      en: "Where is the party?",
      fr: "Où est la fête?"
    },
    a: {
      en: (
        <React.Fragment>
          The party is being held at{" "}
          <span className="address">The Depot, London, N7 9EF</span>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          La fête a lieu à{" "}
          <span className="address">The Depot, Londres, N7 9EF</span>
        </React.Fragment>
      )
    }
  },
  {
    q: {
      en: "When should I arrive if I'm coming to the party?",
      fr: "Quand devrais-je arriver si je viens à la fête?"
    },
    a: {
      en:
        "If you're one of our party people and get to miss the speeches, come join in at any time after 6. We'll celebrate til late.",
      fr:
        "Si vous faites partie de notre parti et manquez les discours, venez vous joindre à tout moment après 6 heures. Nous célébrerons jusqu'à tard."
    }
  },
  {
    q: {
      en: "Will there be dancing?",
      fr: "Y aura-t-il de la danse?"
    },
    a: {
      en: "Hell yes! There will be silly games, too.",
      fr: "Putain, oui! Il y aura aussi des jeux stupides."
    }
  },
  {
    q: {
      en: "Will there be food?",
      fr: "Y aura-t-il de la nourriture?"
    },
    a: {
      en: "There will! Pizzas and buffet, cheese and pickles.",
      fr: "Il y aura! Pizzas et buffet, fromage et cornichons."
    }
  }
];

const OTHER_QUESTIONS = [
  {
    q: {
      en: "Where can I tell you about what I can eat?",
      fr: "Où puis-je vous parler de ce que je peux manger?"
    },
    a: {
      en:
        "In May we will be offering a choice of menus, and we can discuss it then.",
      fr:
        "En mai, nous proposerons un choix de menus et nous pourrons en discuter ensuite."
    }
  },
  {
    q: {
      en: "Should I bring a gift?",
      fr: "Devrais-je apporter un cadeau?"
    },
    a: {
      en: (
        <React.Fragment>
          There are three options:
          <br />
          <ol type="1">
            <li>No, please, just you</li>
            <li>You could donate a gift amount to St Mungos</li>
            <li>
              We will be going on honeymoon, and it will be more expensive than
              we realise.
            </li>
          </ol>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Il y a trois options:
          <br />
          <ol type="1">
            <li>Non, s'il vous plait, juste vous</li>
            <li>Vous pouvez donner un montant en cadeau à St Mungos</li>
            <li>
              Nous allons partir en lune de miel, et ce sera plus cher que nous
              réalisons.
            </li>
          </ol>
        </React.Fragment>
      )
    }
  },
  {
    q: {
      en:
        "Are there any local places you’d recommend I visit while I’m in town?",
      fr:
        "Y a-t-il des endroits que vous recommanderiez de visiter pendant que je suis à ville?"
    },
    a: {
      en: "?",
      fr: "?"
    }
  },
  {
    q: {
      en: "Will there be a shuttle to and/or from the hotel?",
      fr: "Y aura-t-il une navette pour aller et venir de l'hôtel?"
    },
    a: {
      en: "?",
      fr: "?"
    }
  },
  {
    q: {
      en:
        "Is there someone I can contact if I have any other questions about the wedding?",
      fr:
        "Y a-t-il quelqu'un que je peux contacter si j'ai d'autres questions à propos de le mariage?"
    },
    a: {
      en: (
        <React.Fragment>
          Please email us with anything you need:{" "}
          <a href="mailto:hello@andyandanneso.com">hello@andyandanneso.com</a>
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          S'il vous plaît écrivez-nous avec tout ce dont vous avez besoin
        </React.Fragment>
      )
    }
  }
];

export default {
  title: {
    en: <DropCap>Answers</DropCap>,
    fr: <DropCap>Réponses</DropCap>
  },
  before: {
    en: "Before the day",
    fr: "Avant le jour",
    items: BEFORE_QUESTIONS
  },
  ceremony: {
    en: "At the ceremony",
    fr: "À la cérémonie",
    items: CEREMONY_QUESTIONS
  },
  party: {
    en: "At the party",
    fr: "À la fête",
    items: PARTY_QUESTIONS
  },
  other: {
    en: "Other questions?",
    fr: "D'autres questions?",
    items: OTHER_QUESTIONS
  }
};
