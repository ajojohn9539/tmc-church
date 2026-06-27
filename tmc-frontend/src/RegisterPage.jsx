import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    parishRole: 'Member',
    areaPrayer: 'Jebel Ali Area'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing pending users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('tmc_pending_users') || '[]');
    
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      areaPrayer: formData.areaPrayer,
      registeredAt: new Date().toLocaleDateString(),
      status: 'Pending'
    };

    const updatedUsers = [newUser, ...existingUsers];
    localStorage.setItem('tmc_pending_users', JSON.stringify(updatedUsers));

    setSubmitted(true);
  };

  return (
    <div className="auth-container" style={{ background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', minHeight: '100vh', padding: '3rem 1rem', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', textDecoration: 'none', color: '#63b3ed', fontWeight: 'bold', fontSize: '1.1rem' }}>
        &larr; Back to Church Portal
      </Link>
      
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: '#ffffff', color: '#1a202c', padding: '3rem', borderRadius: '16px', maxWidth: '550px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#2b6cb0', fontWeight: '800' }}>TMC Member Portal</h2>
          <p style={{ color: '#718096', marginTop: '0.5rem' }}>Dubai Mar Thoma Parish Membership Registration</p>
        </div>
        
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '4rem', color: '#48bb78', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontSize: '1.8rem', color: '#2d3748', marginBottom: '1rem' }}>Registration Submitted!</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '2rem' }}>
              Thank you for registering, <strong>{formData.name}</strong>. Your membership request has been sent to the <strong>Super Admin / Vicar Office</strong> for verification.
            </p>
            <p style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '2rem', background: '#edf2f7', padding: '1rem', borderRadius: '8px' }}>
              📧 You will receive an official confirmation email at <strong>{formData.email}</strong> once your account is approved by the Super Admin.
            </p>
            <button 
              onClick={() => navigate('/')} 
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.875rem' }}
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="name" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Full Name (as per Passport/ID)</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="e.g. Thomas Mathew"
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="email" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="thomas@example.com"
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label htmlFor="phone" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Mobile Number (UAE)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required
                  placeholder="+971 50 123 4567"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="areaPrayer" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Area Prayer Group</label>
                <select
                  id="areaPrayer"
                  name="areaPrayer"
                  value={formData.areaPrayer}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '1rem', backgroundColor: '#fff' }}
                >
                  <option value="Jebel Ali Area">Jebel Ali Area</option>
                  <option value="Bur Dubai Area">Bur Dubai Area</option>
                  <option value="Deira Area">Deira Area</option>
                  <option value="Karama Area">Karama Area</option>
                  <option value="Sharjah / Northern Area">Sharjah / Northern Area</option>
                </select>
              </div>
            </div>
            
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="password" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Account Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                placeholder="••••••••"
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary btn-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: '700', borderRadius: '8px' }}
            >
              Submit for Super Admin Approval
            </motion.button>
          </form>
        )}

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#718096' }}>Already an approved member? <a href="#" style={{ color: '#2b6cb0', textDecoration: 'none', fontWeight: 'bold' }}>Member Login</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
