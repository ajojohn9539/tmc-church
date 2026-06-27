import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar glass-panel" style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(26, 32, 44, 0.95)', padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#63b3ed', letterSpacing: '1px' }}>TMC</span>
        <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#fff' }}>Thabor Mar Thoma Parish</span>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>

        {/* Our Parish Dropdown */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => toggleDropdown('parish')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: '500', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Our Parish ▾
          </button>
          {activeDropdown === 'parish' && (
            <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#2d3748', borderRadius: '8px', padding: '0.75rem 0', minWidth: '200px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', marginTop: '0.5rem' }}>
              <Link to="/#beginning" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#e2e8f0', textDecoration: 'none' }}>Our Beginning</Link>
              <Link to="/officials" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#e2e8f0', textDecoration: 'none' }}>Bishops & Vicars</Link>
              <Link to="/#diocese" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#e2e8f0', textDecoration: 'none' }}>Our Diocese</Link>
            </div>
          )}
        </div>

        {/* Officials Dropdown */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => toggleDropdown('officials')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: '500', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Officials ▾
          </button>
          {activeDropdown === 'officials' && (
            <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#2d3748', borderRadius: '8px', padding: '0.75rem 0', minWidth: '220px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', marginTop: '0.5rem' }}>
              <Link to="/officials" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#e2e8f0', textDecoration: 'none' }}>Office Bearers</Link>
              <Link to="/organisations" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#e2e8f0', textDecoration: 'none' }}>Parish Organisations</Link>
            </div>
          )}
        </div>

        {/* Worship & News */}
        <a href="/#worship" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Worship Timings</a>
        <Link to="/organisations" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Organisations</Link>
        <a href="/#gallery" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Gallery</a>

        {/* Member Portal & Admin buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '1rem' }}>
          <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.95rem' }}>Member Register</Link>
          <Link to="/admin" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.95rem', backgroundColor: '#e53e3e', color: 'white' }}>Super Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
