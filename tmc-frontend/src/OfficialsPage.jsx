import React from 'react';
import Navbar from './Navbar';

const OfficialsPage = () => {
  const clergy = [
    { title: 'Vicar', name: 'Rev. Jijo Thankachan Mutheri', phone: '+971 50 552 1899', email: 'vicarmtpd@gmail.com' },
    { title: 'Assistant Vicar', name: 'Rev. John Knox', phone: '+971 50 458 2187', email: 'asstvicar@marthomaparishdubai.org' },
    { title: 'Youth Chaplain', name: 'Rev. Binoy Baby', phone: '+971 54 399 6633', email: 'youthchaplain@marthomaparishdubai.org' },
  ];

  const officeBearers = [
    { role: 'Vice President', name: 'Mr. Jones M. Daniel' },
    { role: 'Secretary', name: 'Mr. Mathew P Thomas' },
    { role: 'Trustee - Finance', name: 'Mr. Vinodh Sam Isaac' },
    { role: 'Trustee - Accounts', name: 'Mr. Alexander T John' },
    { role: 'Lay Leader - Malayalam', name: 'Mr. Binu Abraham Cherukadu' },
    { role: 'Lay Leader - English', name: 'Mr. Renji Mathew' },
  ];

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Clergy Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.8rem', color: '#1a202c', fontWeight: '800' }}>Parish Clergy</h1>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginTop: '0.5rem' }}>Spiritual Leadership & Pastoral Guidance</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {clergy.map((c, idx) => (
              <div key={idx} style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '5px solid #2b6cb0' }}>
                <span style={{ backgroundColor: '#ebf8ff', color: '#2b6cb0', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>{c.title}</span>
                <h3 style={{ fontSize: '1.5rem', color: '#1a202c', margin: '1rem 0 0.5rem 0', fontWeight: '700' }}>{c.name}</h3>
                <p style={{ color: '#4a5568', margin: '0.25rem 0' }}>📞 {c.phone}</p>
                <p style={{ color: '#718096', fontSize: '0.95rem' }}>✉️ {c.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Bearers Section */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#1a202c', fontWeight: '700' }}>Executive Office Bearers</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {officeBearers.map((ob, idx) => (
              <div key={idx} style={{ background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#718096', fontWeight: '600' }}>{ob.role}</span>
                <h4 style={{ fontSize: '1.2rem', color: '#2d3748', marginTop: '0.25rem', fontWeight: '700' }}>{ob.name}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OfficialsPage;
