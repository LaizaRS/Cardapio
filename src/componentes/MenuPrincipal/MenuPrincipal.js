import { Link } from "react-router-dom";
import "./MenuPrincipal.css";

export const MenuPrincipal = ({ to, opcao }) => {
  return <Link to={to}>
    <li>{opcao}</li>
  </Link>
}

export default MenuPrincipal