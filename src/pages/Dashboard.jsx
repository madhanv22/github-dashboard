import React from 'react';
import Header from './Header';
import DashboardContent from './dashboardContent';

const Dashboard = () => {
  return (
    <div className="font-sans bg-pink-50 h-screen">
      <Header />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
