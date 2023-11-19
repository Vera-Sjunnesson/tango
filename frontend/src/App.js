import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { Hero } from 'components/pages/hero/Hero';
import { Calendarium } from 'components/pages/calendarium/Calendarium';
import { News } from 'components/pages/news/News';
import { About } from 'components/pages/about/About';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/kalendarium" element={<Calendarium />} />
        <Route path="/aktuellt" element={<News />} />
        <Route path="/om" element={<About />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

