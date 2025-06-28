import React from "react";

const AdminHead = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center space-y-6 animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-300">ADMIN DASHBOARD</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Admin</span>
            <br />
            <span className="text-primary">Control Panel</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Manage your staking pools, monitor transactions, and control the entire DeFi ecosystem 
            from this comprehensive admin dashboard.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="stat-value text-2xl">🔐</div>
              <div className="stat-label">Secure</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-2xl">⚡</div>
              <div className="stat-label">Fast</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-2xl">📊</div>
              <div className="stat-label">Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHead;