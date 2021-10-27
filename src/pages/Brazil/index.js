import React from "react";

import Card from '../../components/Card'
import './index.css';

import {csvJSON} from '../../utils/functions.js';

const data = [
  {
    "name": "Sudrakon",
    "deck1": "https://lor.mobalytics.gg/decks/c4og7jel1nnbkqn26cn0",
    "deck2": "https://lor.mobalytics.gg/decks/c4og7me3kvdgnetvjelg",
    "twitch": "twitch.tv/sudrakon",
    "nameDeck1": "Lulu Poppy Rally",
    "nameDeck2": "Nami Zoe"
  },
  {
    "name": "4LW",
    "deck1": "https://lor.mobalytics.gg/decks/c4og9iul1nnbkqn26rc0",
    "deck2": "https://lor.mobalytics.gg/decks/c4og9movv2m1kj0taot0",
    "twitch": "twitch.tv/4lw_",
    "nameDeck1": "Ezreal Karma",
    "nameDeck2": "Nami Zoe"
  },
  {
    "name": "TheBlackBoss",
    "deck1": "https://lor.mobalytics.gg/decks/c4og65qsrrn05b57evog",
    "deck2": "https://lor.mobalytics.gg/decks/c4og6ael1nnbkqn263vg",
    "twitch": "twitch.tv/theblackbossbr",
    "nameDeck1": "Lulu Poppy Rally",
    "nameDeck2": "Puffcaps Freeze Foundry"
  },
  {
    "name": "Master Doran",
    "deck1": "https://lor.mobalytics.gg/decks/c4og5uu2pok54hssnkqg",
    "deck2": "https://lor.mobalytics.gg/decks/c4og62isrrn05b57euo0",
    "twitch": "twitch.tv/masterdoran_lor",
    "nameDeck1": "Lulu Poppy Rally",
    "nameDeck2": "Draven Sion Discard"
  },
]

const data2 = [
  {
    "name": "Paimera",
    "deck1": "https://lor.mobalytics.gg/decks/c4og98qg6cd0ueh77pe0",
    "deck2": "https://lor.mobalytics.gg/decks/c4og9e6l1nnbkqn26qeg",
    "twitch": "twitch.tv/nunudedudu",
    "nameDeck1": "Ezreal Karma",
    "nameDeck2": "GP Sejuani Plunder"
  },
  {
    "name": "Raygeki",
    "deck1": "https://lor.mobalytics.gg/decks/c4og7pvo67dn6lcjccag",
    "deck2": "https://lor.mobalytics.gg/decks/c4oi5uovv2m1kj0to3r0",
    "twitch": "twitch.tv/raygekibr",
    "nameDeck1": "Nami Zoe",
    "nameDeck2": "Darkness Control"
  },
  {
    "name": "SharkGui",
    "deck1": "https://lor.mobalytics.gg/decks/c4ofqfe3kvdgnetvg9e0",
    "deck2": "https://lor.mobalytics.gg/decks/c4ofqq2g6cd0ueh74ao0",
    "twitch": "twitch.tv/SharkGui",
    "nameDeck1": "Lulu Poppy Rally",
    "nameDeck2": "Draven Sion Discard"
  },
  {
    "name": "LGamesBr",
    "deck1": "https://lor.mobalytics.gg/decks/c4ofpfel1nnbkqn230r0",
    "deck2": "https://lor.mobalytics.gg/decks/c4ofpju3kvdgnetvg2tg",
    "twitch": "twitch.tv/lgamesbrlor",
    "nameDeck1": "Teemo Poppy Elusives YiA",
    "nameDeck2": "Draven Sion Discard"
  }]


function Brazil() {
  return (
    <div id="container">
      <div id="container-data">
        {data ?
          data.map((fighter) => (

            <Card
              name={fighter.name}
              deck1={fighter.deck1}
              deck2={fighter.deck2}
              twitch={fighter.twitch}
              nomeDeck1={fighter.nameDeck1}
              nomeDeck2={fighter.nameDeck2}
            />

          ))

          : <div />
        }
      </div>

      <div id="container-data2">
        {data2 ?
          data2.map((fighter) => (

            <Card
              name={fighter.name}
              deck1={fighter.deck1}
              deck2={fighter.deck2}
              twitch={fighter.twitch}
              nomeDeck1={fighter.nameDeck1}
              nomeDeck2={fighter.nameDeck2}
            />

          ))

          : <div />
        }
      </div>
    </div>
  );
}

export default Brazil;
