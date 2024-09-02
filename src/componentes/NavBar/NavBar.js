import rotas from "../../json/Rotas/rotas.json";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";

const NavBar = () => {
  return (
    rotas.map((rota, index) => {
      return (
        <MenuPrincipal key={index} to={rota.caminho} opcao={rota.opcao} />
      )
    })

  )
}


export default NavBar