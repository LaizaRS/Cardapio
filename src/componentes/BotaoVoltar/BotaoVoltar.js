import { Link } from "react-router-dom"
import Inicio from "../../paginas/Inicio/Inicio"
import "./BotaoVoltar.css"

const BoaoVoltar = () => {
  return (
    <Link to={`/`} element={<Inicio />}> <div className="voltar"> Voltar a pagina inicial </div> </Link>)

}

export default BoaoVoltar