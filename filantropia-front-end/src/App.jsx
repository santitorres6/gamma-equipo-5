import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/molecules/Header/Header";
import { Home } from "./pages/Home/Home";
import { Testimonios } from "./pages/Testimonios/Testimonios";
import { Donaciones } from "./pages/Donaciones/Donaciones";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    // Se envuelve la aplicacion del contexto
    <div className="App">
      <Header />
      {/* Rutas */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testimonios" element={<Testimonios />}></Route>
          <Route path="/donaciones" element={<Donaciones />}></Route>
        </Routes>
      </AnimatePresence>
      {/* //Componente footer */}
    </div>
  );
}

export default App;
