import { Link } from "react-router-dom";
import MenuPrincipal from "../../componentes/MenuPrincipal/MenuPrincipal";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div>
      <h1>Cardapio</h1>
      <Link to={`/pizzas`}> <MenuPrincipal opcao="Pizzas" /> </Link>
      <Link to={`/bebidas`}><MenuPrincipal opcao="Bebidas" /></Link>
      <Link to={`/drinks`}> <MenuPrincipal opcao="Drinks" /> </Link>
      <Link to={`/sobremesas`}><MenuPrincipal opcao="Sobremesas" /></Link>


    </div >
  );
}


export default Inicio