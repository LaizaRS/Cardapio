import BoaoVoltar from "../../componentes/BotaoVoltar/BotaoVoltar";
import Cardapio from "../../componentes/Cardapio/Cardapio";
import bebidasAlcolicas from "../../json/Bebidas/alcoolicas.json";

const Alcolicas = () => {

  return (
    <div>
      <BoaoVoltar />
      <Cardapio itens={bebidasAlcolicas} />
    </div>
  )

}

export default Alcolicas