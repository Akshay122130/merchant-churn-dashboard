import React from 'react';

const MerchantTable = ({ merchants }) => {
  const getRiskBadgeClass = (risk) => {
    switch (risk) {
      case 'Low':
        return 'badge badge--green';
      case 'Medium':
        return 'badge badge--orange';
      case 'High':
        return 'badge badge--red';
      default:
        return 'badge';
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="table-container">
      <table className="merchant-table">
        <thead>
          <tr>
            <th>Merchant Name</th>
            <th>Business Category</th>
            <th>Days Since Last Transaction</th>
            <th>Transactions (30 Days)</th>
            <th>Revenue (30 Days)</th>
            <th>Login Frequency</th>
            <th>Support Tickets</th>
            <th>Risk Category</th>
            <th>Recommended Next Step</th>
          </tr>
        </thead>
        <tbody>
          {merchants.length > 0 ? (
            merchants.map((merchant, index) => (
              <tr key={index}>
                <td className="table-cell--name">{merchant.merchantName}</td>
                <td>{merchant.businessCategory}</td>
                <td>{merchant.daysSinceLastTransaction}</td>
                <td>{merchant.transactions30Days}</td>
                <td>{formatCurrency(merchant.revenue30Days)}</td>
                <td>{merchant.loginFrequency}</td>
                <td>{merchant.supportTickets}</td>
                <td>
                  <span className={getRiskBadgeClass(merchant.riskCategory)}>
                    {merchant.riskCategory}
                  </span>
                </td>
                <td className="table-cell--step">{merchant.recommendedNextStep}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="table-cell--no-results">
                No merchants found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantTable;
