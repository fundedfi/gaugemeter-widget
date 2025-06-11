import React from 'react';

const App = () => {
  const partnerId = new URLSearchParams(window.location.search).get('partner_id');

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '1rem' }}>
        🚀 Funding Gauge 2.0
      </h1>

      <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>
        Partner tracking enabled. GPT-style tooltips. Custom scorecards coming soon.
      </p>

      <p style={{ marginTop: '1rem', color: '#374151' }}>
        <strong>Partner ID:</strong> {partnerId || 'N/A'}
      </p>

      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        View Funding Recommendations →
      </button>
    </main>
  );
};

export default App;
