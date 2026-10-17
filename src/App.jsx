import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Brands } from './pages/Brands';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Accessories } from './pages/Accessories';
import { Reviews } from './pages/Reviews';
import { Offers } from './pages/Offers';
import { Packages } from './pages/Packages';
import { BookService } from './pages/BookService';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offers" element={<Offers />} />
        <Route path="brands" element={<Brands />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="book" element={<BookService />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
