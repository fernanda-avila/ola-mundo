import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "../src/components/Menu";
import Rodape from "components/Rodape";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
