import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnotherPage from './pages/AnotherPage';
import HomePage from './pages/HomePage';

const EagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/another" element={<AnotherPage />} />
    </Routes>
  );
};
export default EagerRoutes;
