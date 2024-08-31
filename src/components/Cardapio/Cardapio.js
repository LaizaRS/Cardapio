import BoaoVoltar from "../BotaoVoltar/BotaoVoltar";
import CardapioCard from "../CardapioCard/CardapioCard";

const Cardapio = ({ itens }) => {

  return (
    <div >
      <BoaoVoltar />
      <CardapioCard itens={itens} />
    </div>
  )
}

export default Cardapio