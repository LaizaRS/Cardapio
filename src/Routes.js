import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alcolicas from "./paginas/Bebidas/Alcoolicas";
import NaoAlcolicas from "./paginas/Bebidas/NaoAlcolicas";
import Inicio from "./paginas/Inicio/Inicio";
import Pizzas from "./paginas/Pizzas/Pizzas";
import Sobremesas from "./paginas/Sobremesas/Sobremesas";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Inicio />}></Route>

        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/bebidas" element={<NaoAlcolicas />} />
        <Route path="/drinks" element={<Alcolicas />} />
        <Route path="/sobremesas" element={<Sobremesas />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
