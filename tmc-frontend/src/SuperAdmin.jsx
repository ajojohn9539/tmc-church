import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SuperAdmin = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', areaPrayer: 'Jebel Ali Area' });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Load initial users from localStorage or set defaults if empty
    const saved = localStorage.getItem('tmc_pending_users');
    if (saved) {
      setUsers(JSON.parse(saved));
    } else {
      const defaultUsers = [
        { id: 101, name: 'Mathew P. Thomas', email: 'mathew@example.com', phone: '+971 50 987 6543', areaPrayer: 'Bur Dubai Area', registeredAt: '2026-06-25', status: 'Pending' },
        { id: 102, name: 'Elizabeth Kurien', email: 'elizabeth@example.com', phone: '+971 55 432 1098', areaPrayer: 'Karama Area', registeredAt: '2026-06-26', status: 'Pending' }
      ];
      setUsers(defaultUsers);
      localStorage.setItem('tmc_pending_users', JSON.stringify(defaultUsers));
    }
  }, []);

  const saveUsers = (updated) => {
    setUsers(updated);
    localStorage.setItem('tmc_pending_users', JSON.stringify(updated));
  };

  const handleApprove = (user) => {
    const updated = users.map(u => u.id === user.id ? { ...u, status: 'Approved' } : u);
    saveUsers(updated);

    // Show automated email alert notification
    setNotification({
      type: 'success',
      message: `✅ Member "${user.name}" Approved! Automated welcome email sent to ${user.email}.`
    });
    setTimeout(() => setNotification(null), 6000);
  };

  const handleReject = (user) => {
    const updated = users.filter(u => u.id !== user.id);
    saveUsers(updated);
    setNotification({
      type: 'info',
      message: `Registration for "${user.name}" rejected and removed.`
    });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const userToAdd = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      areaPrayer: newUser.areaPrayer,
      registeredAt: new Date().toLocaleDateString(),
      status: 'Approved' // Direct additions by admin are auto-approved
    };

    const updated = [userToAdd, ...users];
    saveUsers(updated);
    setShowAddModal(false);
    setNewUser({ name: '', email: '', phone: '', areaPrayer: 'Jebel Ali Area' });

    setNotification({
      type: 'success',
      message: `🎉 User "${userToAdd.name}" added directly by Super Admin. Login credentials emailed to ${userToAdd.email}.`
    });
    setTimeout(() => setNotification(null), 6000);
  };

  return (
    <div style={{ backgroundColor: '#edf2f7', minHeight: '100vh', padding: '2rem 5%', color: '#2d3748' }}>
      {/* Header Bar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a202c', color: '#fff', padding: '1.25rem 2rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#63b3ed' }}>TMC Church Super Admin Control Center</h1>
          <p style={{ fontSize: '0.95rem', color: '#a0aec0', marginTop: '0.25rem' }}>Thabor Mar Thoma Church Pandithitta Member Verification & Approval Management</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => setShowAddModal(true)}
            className="btn"
            style={{ backgroundColor: '#319795', color: '#fff', fontWeight: '700', padding: '0.65rem 1.25rem' }}
          >
            + Add New Member
          </button>
          <Link to="/" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '600', padding: '0.65rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}>
            Back to Portal
          </Link>
        </div>
      </header>

      {/* Notification Banner */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor: notification.type === 'success' ? '#c6f6d5' : '#e2e8f0',
            color: notification.type === 'success' ? '#22543d' : '#2d3748',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            borderLeft: `6px solid ${notification.type === 'success' ? '#38a169' : '#4a5568'}`
          }}
        >
          {notification.message}
        </motion.div>
      )}

      {/* Stats Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.9rem', color: '#718096', fontWeight: '600' }}>Total Registrations</span>
          <h2 style={{ fontSize: '2.2rem', color: '#2b6cb0', marginTop: '0.25rem' }}>{users.length}</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.9rem', color: '#718096', fontWeight: '600' }}>Pending Approvals</span>
          <h2 style={{ fontSize: '2.2rem', color: '#dd6b20', marginTop: '0.25rem' }}>{users.filter(u => u.status === 'Pending').length}</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.9rem', color: '#718096', fontWeight: '600' }}>Approved Members</span>
          <h2 style={{ fontSize: '2.2rem', color: '#38a169', marginTop: '0.25rem' }}>{users.filter(u => u.status === 'Approved').length}</h2>
        </div>
      </div>

      {/* Main Users Table */}
      <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1a202c', marginBottom: '1.5rem' }}>Registered Member Applications</h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7fafc', borderBottom: '2px solid #e2e8f0', color: '#4a5568', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem' }}>Member Name</th>
                <th style={{ padding: '1rem' }}>Email / Phone</th>
                <th style={{ padding: '1rem' }}>Area Prayer</th>
                <th style={{ padding: '1rem' }}>Date</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#a0aec0' }}>No registered users found.</td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #edf2f7' }}>
                    <td style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#2d3748' }}>{user.name}</td>
                    <td style={{ padding: '1.25rem 1rem' }}>
                      <div>{user.email}</div>
                      <small style={{ color: '#718096' }}>{user.phone}</small>
                    </td>
                    <td style={{ padding: '1.25rem 1rem', color: '#4a5568' }}>{user.areaPrayer}</td>
                    <td style={{ padding: '1.25rem 1rem', color: '#718096', fontSize: '0.9rem' }}>{user.registeredAt}</td>
                    <td style={{ padding: '1.25rem 1rem' }}>
                      <span style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        backgroundColor: user.status === 'Approved' ? '#c6f6d5' : '#feebc8',
                        color: user.status === 'Approved' ? '#22543d' : '#9c4221',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        display: 'inline-block'
                      }}>
                        {user.status === 'Approved' ? '✓ Approved' : '⏳ Pending Approval'}
                      </span>
                    </td>
                    <td style={{ padding: '1.25rem 1rem', textAlign: 'right' }}>
                      {user.status === 'Pending' ? (
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => handleApprove(user)}
                            style={{ padding: '0.5rem 1rem', backgroundColor: '#38a169', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                          >
                            Approve & Mail User
                          </button>
                          <button
                            onClick={() => handleReject(user)}
                            style={{ padding: '0.5rem 0.75rem', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span style={{ color: '#38a169', fontWeight: '600', fontSize: '0.9rem' }}>Email Sent</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '12px', width: '100%', maxWidth: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a202c' }}>Super Admin: Register New Member</h3>
            <form onSubmit={handleAddUser}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e0' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e0' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem' }}>Mobile Phone</label>
                <input
                  type="tel"
                  required
                  value={newUser.phone}
                  onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e0' }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem' }}>Area Prayer</label>
                <select
                  value={newUser.areaPrayer}
                  onChange={e => setNewUser({ ...newUser, areaPrayer: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e0' }}
                >
                  <option value="Jebel Ali Area">Jebel Ali Area</option>
                  <option value="Bur Dubai Area">Bur Dubai Area</option>
                  <option value="Deira Area">Deira Area</option>
                  <option value="Karama Area">Karama Area</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={{ padding: '0.75rem 1.25rem', border: '1px solid #cbd5e0', background: '#fff', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '0.75rem 1.25rem', background: '#319795', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>Save & Email Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdmin;
