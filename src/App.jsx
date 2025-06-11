import React from 'react';

const App = () => {
  const partnerId = new URLSearchParams(window.location.search).get('partner_id') || 'demo';

  return (
    <main style={{
      maxWidth: '400px',
      margin: '40px auto',
      background: '#fff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ marginBottom: 10 }}>🔥 Funding Gauge</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
        Partner: <strong>{partnerId}</strong>
      </p>
      <div style={{ textAlign: 'center', fontSize: '2.5rem', color: '#10b981', marginBottom: 8 }}>
        87%
      </div>
      <div style={{ fontSize: '15px', textAlign: 'center', marginBottom: 20 }}>
        You’re fundable! Lenders love this profile.
      </div>
      <ul style={{ fontSize: '14px', color: '#444', lineHeight: 1.6, marginBottom: 20 }}>
        <li>💼 Est. Max Funding: $75,000</li>
        <li>⏱️ Last Updated: 2 mins ago</li>
        <li>📊 Based on credit, revenue & cash flow</li>
      </ul>
      <button style={{
        background: '#3b82f6',
        color: '#fff',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        width: '100%',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        View Funding Options →
      </button>
    </main>
  );
};

export default App;
