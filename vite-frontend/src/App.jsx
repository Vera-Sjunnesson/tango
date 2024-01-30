import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import { Glossary } from './components/pages/aboutTangoSubPages/Glossary';
import { Music } from './components/pages/aboutTangoSubPages/Music';
import { Interviews } from './components/pages/aboutTangoSubPages/Interviews';
import { NotFound } from './components/pages/notFound/NotFound';
import { ScrollToTop } from './components/sections/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyles />
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/kalendarium" element={<CalendarBoard />} />
        <Route path="/kalendarium/:id" element={<EventDetails />} />
        <Route path="/aktuellt" element={<News />} />
        <Route path="/aktuellt/:id" element={<NewsDetails />} />
        <Route path="/om" element={<About />} />
        <Route path="/om-tango" element={<AboutTango />} />
        <Route path="/om-tango/ordlista" element={<Glossary />} />
        <Route path="/om-tango/musik" element={<Music />} />
        <Route path="/om-tango/intervjuer" element={<Interviews />} />
        <Route path="/lokal/:venueid" element={<VenueDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


