import BoaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import Cardapio from "../../components/Cardapio/Cardapio";
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