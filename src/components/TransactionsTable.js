// TransactionsTable.js
import React from 'react';
import './TransactionsTable.css';

const TransactionsTable = () => {
  return (
    <div className="transactions-table">
      <div className="transactions-header">Recent Transaction</div> {/* New header div */}
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Loan Amount</th>
            <th>Loan Type</th>
            <th>Tenure</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>$5,000</td>
            <td>Personal</td>
            <td>12 months</td>
            <td>2024-10-01</td>
            <td>Approved</td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
