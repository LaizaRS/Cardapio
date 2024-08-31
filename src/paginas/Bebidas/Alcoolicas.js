import Cardapio from "../../components/Cardapio/Cardapio";
import bebidasAlcolicas from "../../json/Bebidas/alcoolicas.json";

const Alcolicas = () => {

  return (
    <div>
      <Cardapio itens={bebidasAlcolicas} />
    </div>
  )

}

export default Alcolicas