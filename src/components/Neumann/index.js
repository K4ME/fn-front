import React from "react";
import { Button } from "react-bootstrap";

import imageNeumann from '../../../images/Sem título-1-14.jpg';

import "./index.css";

function Neu() {

  return (
    <>
      <img
        src={imageNeumann}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-neumann">
        <Button target="_blank" href="" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Neu;
