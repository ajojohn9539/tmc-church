import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="app-container" style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" style={{ height: '85vh', position: 'relative', background: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("/assets/hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', padding: '0 1rem' }}>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '900px' }}
        >
          <span style={{ backgroundColor: 'rgba(99, 179, 237, 0.2)', color: '#63b3ed', padding: '0.5rem 1.25rem', borderRadius: '999px', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '1.5rem', border: '1px solid rgba(99, 179, 237, 0.4)' }}>
            Welcome to
          </span>
          <h1 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.5rem' }}>
            Thabor Mar Thoma Church Pandithitta
          </h1>
          <p style={{ fontSize: '1.35rem', opacity: '0.9', maxWidth: '750px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            Standing as a proud testament to the Lord's abounding favour in Thalavoor for over 82 years. A place of worship, spiritual growth, and Christian fellowship.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.15rem', fontWeight: '700' }}>
              Join Member Portal
            </Link>
            <a href="#worship" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.15rem', fontWeight: '600', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
              Worship Timings
            </a>
          </div>
        </motion.div>
      </section>

      {/* Welcome & History Section */}
      <section id="beginning" style={{ padding: '5rem 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#1a202c', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Our Graceful Beginning in Thalavoor
            </h2>
            <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Thabor Mar Thoma Church, Pandithitta, situated in the serene village of Thalavoor, stands as a testimony to God's abundant grace and faithfulness through generations. Established in 1936, the parish began with the unwavering faith and dedication of just eight families who came together for worship, prayer, and Christian fellowship.</p>
            <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              The first General Body Meeting of the parish was held on 10th November 1936, marking a significant milestone in its formal establishment. Later, the members felt the need for a more permanent place of worship and, through prayers and God's guidance, acquired land. By His grace, the foundation stone of the first church building was laid on 12th May 1961.
            </p>
            <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              The church building was successfully constructed and consecrated on 13th June 1965. Since then, by His grace, our vibrant church community continues to glorify God in Thalavoor.
            </p>
            <Link to="/officials" style={{ color: '#2b6cb0', fontWeight: '700', textDecoration: 'none', fontSize: '1.1rem' }}>
              Meet Our Vicars & Office Bearers &rarr;
            </Link>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 30px rgba(0,0,0,0.1)' }}>
            <img src="/assets/hero.png" alt="Church Exterior" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Worship Timings & Sunday Open Schedule */}
      <section id="worship" style={{ padding: '5rem 5%', backgroundColor: '#edf2f7' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#2b6cb0', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Holy Qurbana Services</span>
            <h2 style={{ fontSize: '2.8rem', color: '#1a202c', fontWeight: '800', marginTop: '0.5rem' }}>Worship Timings & Schedule Chart</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Timings Card */}
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#2b6cb0', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⛪ Weekly Worship Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid #edf2f7' }}>
                  <strong style={{ color: '#2d3748', display: 'block', fontSize: '1.1rem' }}>Friday Evening Service</strong>
                  <span style={{ color: '#4a5568' }}>🕒 8:00 PM (Holy Qurbana - Malayalam)</span>
                </li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid #edf2f7' }}>
                  <strong style={{ color: '#2d3748', display: 'block', fontSize: '1.1rem' }}>Saturday Morning Services</strong>
                  <span style={{ color: '#4a5568', display: 'block' }}>🕒 8:00 AM (Holy Qurbana - English)</span>
                  <span style={{ color: '#4a5568', display: 'block' }}>🕒 11:00 AM (Holy Qurbana - Malayalam)</span>
                </li>
                <li style={{ padding: '1rem 0' }}>
                  <strong style={{ color: '#2b6cb0', display: 'block', fontSize: '1.1rem' }}>Sunday Morning Divine Service</strong>
                  <span style={{ color: '#2f855a', fontWeight: '700' }}>🕒 8:00 AM (Holy Qurbana - Malayalam)</span>
                </li>
              </ul>
            </div>

            {/* Sunday Open Schedule Chart */}
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#1a202c', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                📅 Weekly Availability Chart
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#4a5568' }}>Monday - Thursday</td>
                    <td style={{ padding: '1rem', color: '#a0aec0' }}>Office Hours (9AM - 5PM)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#4a5568' }}>Friday & Saturday</td>
                    <td style={{ padding: '1rem', color: '#319795', fontWeight: '700' }}>Services & Fellowship</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f0fff4' }}>
                    <td style={{ padding: '1.25rem 1rem', fontWeight: '800', color: '#22543d', fontSize: '1.2rem' }}>Every Sunday</td>
                    <td style={{ padding: '1.25rem 1rem', fontWeight: '800', color: '#38a169', fontSize: '1.2rem' }}>
                      🟢 OPEN (Full Day Worship)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Church Gallery Section */}
      <section id="gallery" style={{ padding: '5rem 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', color: '#1a202c', fontWeight: '800', marginBottom: '1rem' }}>Church Gallery</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem', marginBottom: '3rem' }}>Moments of worship, choir praise, and community gatherings in Dubai</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              <img src="/assets/gallery1.png" alt="Congregation Worship" style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '1rem', background: '#2d3748', color: '#fff', fontWeight: '600' }}>Worship Congregation</div>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              <img src="/assets/gallery2.png" alt="Parish Choir & Band" style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '1rem', background: '#2d3748', color: '#fff', fontWeight: '600' }}>Parish Choir & Praise Band</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a202c', color: '#fff', padding: '4rem 5% 2rem 5%', borderTop: '1px solid #2d3748' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#63b3ed', fontWeight: '800', marginBottom: '1rem' }}>Thabor Mar Thoma Church Pandithitta</h3>
            <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>Serving the Mar Thoma Christian community of Pandithitta and Thalavoor with faith, worship, fellowship, and dedicated service since 1944.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#e2e8f0' }}>Quick Contact</h4>
            <p style={{ color: '#a0aec0', margin: '0.4rem 0' }}>📞 Vicar: +971 50 552 1899</p>
            <p style={{ color: '#a0aec0', margin: '0.4rem 0' }}>📞 Office: +971 4 884 5233</p>
            <p style={{ color: '#a0aec0', margin: '0.4rem 0' }}>✉️ vicarmtpd@gmail.com</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#e2e8f0' }}>Portals</h4>
            <Link to="/register" style={{ display: 'block', color: '#63b3ed', textDecoration: 'none', margin: '0.5rem 0' }}>Member Registration Portal</Link>
            {/* <Link to="/admin" style={{ display: 'block', color: '#fc8181', textDecoration: 'none', margin: '0.5rem 0' }}>Super Admin Verification Area</Link> */}
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid #2d3748', paddingTop: '2rem', color: '#718096', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Thabor Mar Thoma Church, Pandithitta. All Rights Reserved.
          Designed & Developed by Ajo John
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
