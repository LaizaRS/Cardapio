import BoaoVoltar from "../../componentes/BotaoVoltar/BotaoVoltar";
import Cardapio from "../../componentes/Cardapio/Cardapio";
import bebidasNaoAlcolicas from "../../json/Bebidas/naoAlcoolicas.json";

const NaoAlcolicas = () => {

  return (
    <div>
      <BoaoVoltar />
      <Cardapio itens={bebidasNaoAlcolicas} />
    </div>
  )

}

export default NaoAlcolicas