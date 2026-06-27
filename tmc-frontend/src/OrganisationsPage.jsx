import React from 'react';
import Navbar from './Navbar';

const OrganisationsPage = () => {
  const organisations = [
    { title: 'Parish Mission', desc: 'Engaged in spiritual outreach, home visits, and evangelical work across Dubai.', icon: '✝️' },
    { title: 'Senior Citizens Forum', desc: 'Providing fellowship, spiritual care, and support for respected senior members.', icon: '👴' },
    { title: 'Sevika Sanghom', desc: 'Women fellowship focused on prayer, charity, empowering women and family ministry.', icon: '👩‍👧' },
    { title: 'Yuvajana Sakhyam', desc: 'Vibrant youth organization fostering leadership, spiritual growth, and active ministry.', icon: '🌱' },
    { title: 'Parish Choir', desc: 'Leading Sunday services and special events with sacred hymns in English & Malayalam.', icon: '🎵' },
    { title: 'Youth Fellowship', desc: 'Connecting young adults, university students, and professionals through fellowship.', icon: '🤝' },
    { title: 'Sunday School (Jebel Ali)', desc: 'Christian education and biblical foundation for children every weekend.', icon: '📖' },
    { title: 'Trinity Sunday School', desc: 'Spiritual nurturing and Sunday school classes for kids in Trinity campus.', icon: '🏫' },
  ];

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.8rem', color: '#1a202c', fontWeight: '800' }}>Parish Organisations</h1>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginTop: '0.5rem' }}>The heart of ministry, fellowship, and service in Dubai Mar Thoma Parish</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {organisations.map((org, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{org.icon}</div>
              <h3 style={{ fontSize: '1.5rem', color: '#2b6cb0', marginBottom: '0.75rem', fontWeight: '700' }}>{org.title}</h3>
              <p style={{ color: '#718096', lineHeight: '1.6' }}>{org.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisationsPage;
