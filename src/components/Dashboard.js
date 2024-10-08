// Dashboard.js
import React from 'react';
import Header from './Header';
import Stats from './Stats';
import Graphs from './Graphs';
import TransactionsTable from './TransactionsTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Stats />
      <Graphs />
      <TransactionsTable />
    </div>
  );
};

export default Dashboard;
