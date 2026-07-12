import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateScrim from './pages/CreateScrim';
import Calendar from './pages/Calendar';
import Roster from './pages/Roster';
import Admin from './pages/Admin';
import Plus from './pages/Plus';

import './styles/design-system.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#090909' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-scrim" element={<CreateScrim />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;