import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const pricingPlans = [
  { name: 'Starter', price: '$999/mo', features: ['1 Project', 'Basic Support'], popular: false },
  { name: 'Professional', price: '$2999/mo', features: ['5 Projects', 'Priority Support', 'Custom Domain'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited Projects', '24/7 Support', 'Dedicated Manager'], popular: false }
];

const Pricing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubscribe = (plan) => {
    if (!user) {
      navigate('/login');
      return;
    }
    // Redirect to payment
    window.location.href = `/billing?plan=${plan.name}`;
  };

  return (
    <div className="pricing-page">
      <h1>Simple, Transparent Pricing</h1>
      
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h2>{plan.name}</h2>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button 
              onClick={() => handleSubscribe(plan)}
              className="subscribe-btn"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
