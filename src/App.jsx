import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoveCalculator from './pages/LoveCalculator';
import Flames from './pages/Flames';
import PickupLine from './pages/PickupLine';
import DateIdea from './pages/DateIdea';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<LoveCalculator />} />
        <Route path="/flames" element={<Flames />} />
        <Route path="/pickup" element={<PickupLine />} />
        <Route path="/date" element={<DateIdea />} />
      </Routes>
    </BrowserRouter>
  );
}