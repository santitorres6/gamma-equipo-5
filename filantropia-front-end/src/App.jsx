import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home/Home";
import { Testimonios } from "./pages/Testimonios/Testimonios";
import { Donaciones } from "./pages/Donaciones/Donaciones";
import "./App.scss";

function App() {
  return (
    // Se envuelve la aplicacion del contexto
    <div className="App">
      <Header />
      <main>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testimonios" element={<Testimonios />}></Route>
          <Route path="/donaciones" element={<Donaciones />}></Route>
        </Routes>
      </main>
      {/* //Componente footer */}
    </div>
  );
}

export default App;

