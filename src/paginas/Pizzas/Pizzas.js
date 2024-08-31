import Cardapio from "../../components/Cardapio/Cardapio";
import pizzas from "../../json/Comidas/pizzas.json";

const Pizzas = () => {

  return (
    <div>
      <Cardapio itens={pizzas} />
    </div>
  )

}

export default Pizzas