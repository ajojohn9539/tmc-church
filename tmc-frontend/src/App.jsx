import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import SuperAdmin from './SuperAdmin';
import OrganisationsPage from './OrganisationsPage';
import OfficialsPage from './OfficialsPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<SuperAdmin />} />
        <Route path="/organisations" element={<OrganisationsPage />} />
        <Route path="/officials" element={<OfficialsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
