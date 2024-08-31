import "./Cardapio.css";

const Cardapio = ({ itens }) => {
  return (
    <div>
      {itens.map(item => (
        <div key={item.id} className="borda">
          <h2>{item.title} R$ {item.price}</h2>
          <img className="imagem-de-fundo" src={item.image_url} alt={item.title} />
          <p> {item.ingredients.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;
