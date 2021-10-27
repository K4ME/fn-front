import React from "react";
import { Button } from "react-bootstrap";

import "./index.css";

function Card({name, deck1, deck2, twitch, nomeDeck1, nomeDeck2}) {

  //recuperar a imagem usando a api da twitch
  const avatar = 'https://static-cdn.jtvnw.net/jtv_user_pictures/47d2988d-5b8e-44f2-a658-bcf8896eebf5-profile_image-70x70.jpg';

  return (
    <>
      <div id="div-card">
        <div id="div-player">
          <img src={avatar} alt={name} className="avatar"/>

          <div id="div-player-name">
            <h4> {name} </h4>
            <a target="_blank" href={`https://${twitch}`} className="twitch">{twitch}</a>
          </div>          
        </div>

        <Button target="_blank" href={deck1} id="bt1">{nomeDeck1}</Button>
        <Button target="_blank" href={deck2} id="bt2">{nomeDeck2}</Button>
              
      </div>
    </>
  );
}

export default Card;
