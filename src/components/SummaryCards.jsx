import React from 'react';

const SummaryCards = ({ merchants }) => {
  const totalMerchants = merchants.length;
  const lowRisk = merchants.filter(m => m.riskCategory === 'Low').length;
  const mediumRisk = merchants.filter(m => m.riskCategory === 'Medium').length;
  const highRisk = merchants.filter(m => m.riskCategory === 'High').length;

  const cards = [
    { title: 'Total Merchants', value: totalMerchants, color: 'blue' },
    { title: 'Low Risk', value: lowRisk, color: 'green' },
    { title: 'Medium Risk', value: mediumRisk, color: 'orange' },
    { title: 'High Risk', value: highRisk, color: 'red' },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, index) => (
        <div key={index} className={`summary-card summary-card--${card.color}`}>
          <h3 className="summary-card__title">{card.title}</h3>
          <p className="summary-card__value">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
