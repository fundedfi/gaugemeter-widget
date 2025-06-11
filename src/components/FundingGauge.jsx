import React from 'react';

const FundingGauge = () => {
  const partnerId = new URLSearchParams(window.location.search).get("partner_id") || "Partner";
  return (
    <div style={{
      maxWidth: 420,
      margin: "40px auto",
      background: "#fff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <div style={{ fontSize: "1.25rem", fontWeight: "600" }}>Funding Gauge 🔥</div>
        <div style={{ fontSize: "0.85rem", color: "#666" }}>Partner: {partnerId}</div>
      </header>
      <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: 10 }}>
        87%
      </div>
      <div style={{ textAlign: "center", fontSize: "1rem", color: "#10b981", marginBottom: 20 }}>
        You're fundable! Lenders love this profile.
      </div>
      <ul style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>
        <li>💼 Est. Max Funding: <strong>$75,000</strong></li>
        <li>⏱️ Last Updated: <strong>2 minutes ago</strong></li>
        <li>📊 Based on credit, revenue, and cash flow data</li>
      </ul>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button style={{
          background: "#3b82f6",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          View Funding Options →
        </button>
      </div>
    </div>
  );
};

export default FundingGauge;
