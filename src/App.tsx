import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from 'Containers/PokemonDetails';
import Home from 'Containers/Home';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

