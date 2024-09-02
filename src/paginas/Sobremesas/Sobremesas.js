import BoaoVoltar from "../../componentes/BotaoVoltar/BotaoVoltar";
import Cardapio from "../../componentes/Cardapio/Cardapio";
import sobremesa from "../../json/Sobremesas/sobremesas.json";

const Sobremesas = () => {

  return (
    <div>
      <BoaoVoltar />
      <Cardapio itens={sobremesa} />
    </div>
  )

}

export default Sobremesas