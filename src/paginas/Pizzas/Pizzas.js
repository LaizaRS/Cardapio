import BoaoVoltar from "../../componentes/BotaoVoltar/BotaoVoltar";
import Cardapio from "../../componentes/Cardapio/Cardapio";
import pizzas from "../../json/Comidas/pizzas.json";

const Pizzas = () => {

  return (
    <div>
      <BoaoVoltar />
      <Cardapio itens={pizzas} />
    </div>
  )

}

export default Pizzas