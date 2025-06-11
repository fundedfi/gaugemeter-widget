import React from 'react';

const App = () => {
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
        Partner tracking enabled. GPT-style tooltips. Custom scorecards coming next...
      </p>
      <button style={{
        marginTop: '2rem',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>
        View Funding Insights →
      </button>
    </main>
  );
};

export default App;
