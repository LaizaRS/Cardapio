import React, { useState } from "react";
import "./Cardapio.css";

const Cardapio = ({ itens }) => {
  const [acordeonAtual, setAcordeonAtual] = useState(null);

  function trocandoAcordeon(acordeonID) {
    setAcordeonAtual(prevID => (prevID === acordeonID ? null : acordeonID));
  }

  return (
    <div>
      {itens.map(item => (
        <div key={item.id} className="borda">
          <h2 onClick={() => trocandoAcordeon(item.id)}>
            {item.title} R$ {item.price}
          </h2>

          <div style={{ display: acordeonAtual === item.id ? "block" : "none" }}>
            <img className="imagem-de-fundo" src={item.image_url} alt={item.title} />
            <p>{item.ingredients.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;

