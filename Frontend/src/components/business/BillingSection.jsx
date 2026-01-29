import React from 'react';
import { Link } from 'react-router-dom';

const BillingSection = () => (
  <section className="billing-section">
    <h2>Billing</h2>
    <div className="billing-card">
      <p>Current Plan: Professional ($2,999/mo)</p>
      <Link to="/pricing" className="btn-primary">Upgrade Plan</Link>
    </div>
  </section>
);

export default BillingSection;
