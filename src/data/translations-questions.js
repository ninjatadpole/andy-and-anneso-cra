import React from "react";
import { Link } from "react-router-dom";

import DropCap from "../components/drop-cap";

const BEFORE_QUESTIONS = [
  {
    q: {
      en: "By when should I RSVP?",
      fr: "Quand devrai-je confirmer ma présence?"
    },
    a: {
      en: `Please let us know who is coming by the end of April. We will then let you know about menus, ask for your preferences and so on.`,
      fr: `Repondez nous svp avant la fin avril. Nous vous informerons ensuite sur les menus et vous demanderons vos préférences.`
    }
  },
  {
    q: {
      en: `Should I send my RSVP back in the post or can I reply online?`,
      fr: `Devrai-je renvoyer ma réponse par la poste ou par email?`
    },
    a: {
      en: (
        <>
          You can write to us at:
          <br />
          <span className="address">
            Flat 1, 34 Gloucester Drive, London, N4 2LN
          </span>{" "}
          or you can email us at{" "}
          <a href="mailto:hello@andyandanneso.com">hello@andyandanneso.com</a>
        </>
      ),
      fr: (
        <>
          Vous pouvez nous écrire à:
          <br />
          <span className="address">
            Flat 1, 34 Gloucester Drive, Londres, N4 2LN
          </span>{" "}
          ou vous pouvez nous envoyer un email à{" "}
          <a href="mailto:hello@annesoetandy.com">hello@annesoetandy.com</a>
        </>
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
        <>
          We can! <Link to="/map">Check out the maps here</Link>
        </>
      ),
      fr: (
        <>
          Nous pouvons! <Link to="/map">Découvrez les cartes ici</Link>
        </>
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
        <>
          The ceremony is being held at{" "}
          <span className="address">Islington Town Hall, London, N1 2UD</span>
        </>
      ),
      fr: (
        <>
          La cérémonie a lieu à{" "}
          <span className="address">Islington Town Hall, Londres, N1 2UD</span>
        </>
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
        "The ceremony is at noon. Please arrive around 11.30 so that you can wait nervously for the bride.",
      fr:
        "La cérémonie est à midi. Arrivez, s'il vous plait, vers 11h30 pour attendre nerveusement la mariée."
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
        "Vous pouvez les amener, mais ils ne seront pas autorisés à assister à la cérémonie et devront être sécurisés à l’extérieur de la mairie."
    }
  },
  {
    q: {
      en: "Can I bring my children?",
      fr: "Puis-je amener mes enfants?"
    },
    a: {
      en: "Of course! Just let us when you respond to the invite.",
      fr:
        "Bien sûr! Faites le nous savoir quand vous nous répondrez à l'invitation."
    }
  },
  {
    q: {
      en: "Is there a dress code?",
      fr: "Y at-il un code vestimentaire?"
    },
    a: {
      en:
        "No, please wear whatever you want. Feel free to bring funky props for the party!",
      fr:
        "Non, portez ce que vous voulez. N'hésitez pas à amener des accessoires de fête pour la soirée!"
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
      fr: "Oui. Restez avec le groupe et tout sera organisé."
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
        <>
          The party is being held at{" "}
          <span className="address">The Depot, London, N7 9EF</span>
        </>
      ),
      fr: (
        <>
          La fête a lieu à{" "}
          <span className="address">The Depot, Londres, N7 9EF</span>
        </>
      )
    }
  },
  {
    q: {
      en: "When should I arrive if I'm coming to the party?",
      fr: "Quand devrai-je arriver si je suis invité(e) à la soiree dansante?"
    },
    a: {
      en:
        "If you're one of our party people, come join in at any time after 7. We'll celebrate til late.",
      fr: "Rejoignez nous dès 19h"
    }
  },
  {
    q: {
      en: "Will there be dancing?",
      fr: "Y aura-t-il de la danse?"
    },
    a: {
      en: "Hell yes! Put your dancing shoes on!",
      fr: "Oui, et nous avons hâte de voir vos meilleurs pas de danse!"
    }
  },
  {
    q: {
      en: "Will there be food?",
      fr: "Y aura-t'il quelque chose à manger?"
    },
    a: {
      en: "There will!",
      fr: "Oui, il y aura un buffet."
    }
  }
];

const OTHER_QUESTIONS = [
  {
    q: {
      en: "Where can I tell you about what I can eat?",
      fr: "Puis je vous dire ce que je peux manger?"
    },
    a: {
      en:
        "In May we will be offering a choice of menus, and we can discuss it then.",
      fr:
        "Indiquez dans votre réponse vos besoins diététiques specifiques. Nous vous contacterons avant le mariage pour confirmer le menu."
    }
  },
  {
    q: {
      en: "Should I bring a gift?",
      fr: "Devrais-je apporter un cadeau?"
    },
    a: {
      en: (
        <>
          There are three options:
          <br />
          <ol type="1">
            <li>No, please, just you</li>
            <li>
              You could donate a gift amount to St Mungos, a charity who helps
              homeless people to move away from the streets.{" "}
              <a
                href="https://gofundme.com/anneso-amp-andy039s-wedding-campaign-for-st-mungo039s"
                target="mungos"
              >
                Donate and find out more here
              </a>
              .
            </li>
            <li>
              We will be going on honeymoon, and it will be more expensive than
              we realise.
            </li>
          </ol>
        </>
      ),
      fr: (
        <>
          Il y a trois options:
          <br />
          <ol type="1">
            <li>Non, s'il vous plait, juste vous</li>
            <li>
              Vous pouvez donner un montant en cadeau à St Mungos, une
              association caritative qui aide les sans-abris.{" "}
              <a
                href="https://gofundme.com/anneso-amp-andy039s-wedding-campaign-for-st-mungo039s"
                target="mungos"
              >
                Suivez ce lien pour plus d'informations.
              </a>
            </li>
            <li>
              Nous allons partir en lune de miel, ce qui nous coûtera sûrement
              plus cher que prévu.
            </li>
          </ol>
        </>
      )
    }
  },
  {
    q: {
      en:
        "Are there any local places you’d recommend I visit while I’m in town?",
      fr:
        "Y a-t-il des endroits que vous recommanderiez de visiter pendant que je suis en ville?"
    },
    a: {
      en: (
        <>
          You can check out some of{" "}
          <a
            href="https://www.thecrazytourist.com/25-best-things-to-do-in-london/"
            target="attractions"
          >
            the best attractions London has to offer
          </a>
          .<br />
          Some of our favourite places in London include:
          <ol>
            <li>Hampstead Heath</li>
            <li>
              The Curve garden, Cafe Andu (Ethiopian restaurant) and Cafe Oto in
              Dalston.
            </li>
            <li>Shoreditch and Brick Lane Market</li>
            <li>The Wonderlab at the Science Museum (great for kids).</li>
            <li>Tate Modern</li>
          </ol>
          <br />
          Day trips suggestions include: Oxford, Cambridge, Camber Sands and
          Rye, Brighton
          <br />2 days+ trips from London include: Bath and Stonehenge,
          Cotswolds, York, Lake District, Cornwall, Canterbury,
          Stratford-Upon-Avon
        </>
      ),
      fr: (
        <>
          Vous pouvez trouver des informations sur les lieux incontournables de
          Londres sur le lien suivant{" "}
          <a
            href="https://www.thecrazytourist.com/25-best-things-to-do-in-london/"
            target="attractions"
          >
            www.thecrazytourist.com/25-best-things-to-do-in-london
          </a>
          .<br />
          Alternativement, vous pouvez aller vous ballader dans un de nos
          endroits préferés de Londres:
          <ol>
            <li>Hampstead Heath</li>
            <li>
              The Curve garden, Cafe Andu (restaurant Ethiopien) et Cafe Oto à
              Dalston.
            </li>
            <li>Les marchés de Shoreditch et Brick Lane</li>
            <li>Le Wonderlab au Science Museum (super pour les enfants).</li>
            <li>Le musée d'art moderne Tate Modern</li>
          </ol>
          <br />
          Vous pouvez effectuer des excursions d'une journée à Oxford,
          Cambridge, Camber Sands, Rye and Brighton.
          <br />
          Vous pouvez effectuer des excursions de deux journées ou plus à Bath
          and Stonehenge, York, Canterbury, Stratford-Upon-Avon, dans le Lake
          District, la région de Cornwall ou dans les Cotswolds.
        </>
      )
    }
  },
  {
    q: {
      en: "Will there be a shuttle to and/or from the hotel?",
      fr: "Y aura-t-il une navette pour aller et venir de l'hôtel?"
    },
    a: {
      en: (
        <>
          No, but you can find transport information on the{" "}
          <Link to="/map">Locations</Link> page.
        </>
      ),
      fr: (
        <>
          Non, mais vous pouvez trouver les informations concernant les
          transports sur la page <Link to="/map">Locations</Link>.
        </>
      )
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
        <>
          Please email us with anything you need:{" "}
          <a href="mailto:hello@andyandanneso.com">hello@andyandanneso.com</a>
        </>
      ),
      fr: (
        <>
          Contactez nous, s'il vous plait à{" "}
          <a href="mailto:hello@annesoetandy.com">hello@annesoetandy.com</a>
        </>
      )
    }
  }
];

export default {
  title: {
    en: <DropCap>Other Info</DropCap>,
    fr: <DropCap>Autres infos</DropCap>
  },
  metaTitle: {
    en: "Other Info",
    fr: "Autres infos"
  },
  before: {
    en: "Before the day",
    fr: "Avant le jour J",
    items: BEFORE_QUESTIONS
  },
  ceremony: {
    en: "At the ceremony",
    fr: "À la cérémonie",
    items: CEREMONY_QUESTIONS
  },
  party: {
    en: "At the party",
    fr: "A la soirée",
    items: PARTY_QUESTIONS
  },
  other: {
    en: "Other questions?",
    fr: "D'autres questions?",
    items: OTHER_QUESTIONS
  }
};
