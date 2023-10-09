import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { Hero } from 'components/pages/hero/Hero';
import { Calendarium } from 'components/pages/calendarium/Calendarium';
import { News } from 'components/pages/news/News';
import { About } from 'components/pages/about/About';
import { useMediaQuery } from 'react-responsive'
import { Header } from 'components/lib/Header';

export const App = () => {
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1280 });
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 744px)' })
  return (
    <BrowserRouter>
      <GlobalStyles />
      {isMobileOrTablet && (
        <Header />
      )}
      {!isTablet && (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/kalendarium" element={<Calendarium />} />
          <Route path="/aktuellt" element={<News />} />
          <Route path="/om" element={<About />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

/* <Route path="/404" element={<NotFound />} /> */