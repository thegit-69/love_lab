import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LoveCalculator from './pages/LoveCalculator';
import Flames from './pages/Flames';
import PickupLine from './pages/PickupLine';
import DateIdea from './pages/DateIdea';
import TopAppBar from './components/TopAppBar';
import GlobalBottomNav from './components/GlobalBottomNav';
import GlobalFooter from './components/GlobalFooter';
import GlobalEmojiBackground from './components/GlobalEmojiBackground';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react";

function AnalyticsTracker() {
  const location = useLocation();
  return (
    <Analytics
      route={location.pathname}
      path={location.pathname + location.search}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="relative">
        <GlobalEmojiBackground />
        <TopAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/love" element={<LoveCalculator />} />
          <Route path="/flames" element={<Flames />} />
          <Route path="/pickup" element={<PickupLine />} />
          <Route path="/date" element={<DateIdea />} />
        </Routes>
        <GlobalFooter />
        <GlobalBottomNav />
      </div>
    </BrowserRouter>
  );
}
