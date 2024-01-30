import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hero } from "./components/pages/hero/Hero"
import { About } from "./components/pages/aboutNorte/About"
import { GlobalStyles } from "./styles/GlobalStyles"
import { CalendarBoard } from './components/pages/calendar/CalendarBoard';
import { News } from './components/pages/news/News';
import { AboutTango } from './components/pages/aboutTango/AboutTango';
import { Footer } from './components/sections/Footer';
import { EventDetails } from './components/pages/details/EventDetails';
import { NewsDetails } from './components/pages/details/NewsDetails';
import { VenueDetails } from './components/pages/details/VenueDetails';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/kalendarium" element={<CalendarBoard />} />
        <Route path="/kalendarium/:id" element={<EventDetails />} />
        <Route path="/aktuellt" element={<News />} />
        <Route path="/aktuellt/:id" element={<NewsDetails />} />
        <Route path="/om-tango" element={<AboutTango />} />
        <Route path="/om" element={<About />} />
        <Route path="/lokal/:venueid" element={<VenueDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


