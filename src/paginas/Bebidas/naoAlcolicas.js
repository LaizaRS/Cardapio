import Cardapio from "../../components/Cardapio/Cardapio";
import bebidasNaoAlcolicas from "../../json/Bebidas/naoAlcoolicas.json";

const Naoalcolicas = () => {

  return (
    <div>
      <Cardapio itens={bebidasNaoAlcolicas} />
    </div>
  )

}

export default Naoalcolicas