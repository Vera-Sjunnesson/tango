import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { Hero } from 'components/pages/hero/Hero';
import { CalendarBoard } from 'components/pages/calendar/ CalendarBoard';
import { News } from 'components/pages/news/News';
import { About } from 'components/pages/about/About';
import { EventDetails } from 'components/pages/details/EventDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/:id" element={<EventDetails />} />
        <Route path="/kalendarium" element={<CalendarBoard />} />
        <Route path="/kalendarium/:id" element={<EventDetails />} />
        <Route path="/aktuellt" element={<News />} />
        <Route path="/aktuellt/:id" element={<EventDetails />} />
        <Route path="/om" element={<About />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

