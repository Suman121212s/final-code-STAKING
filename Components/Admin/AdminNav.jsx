import React from "react";
import ButtonCmp from "./RegularComp/ButtonCmp";

const AdminNav = () => {
  const navItems = [
    { name: "Dashboard", tab: 1, icon: "📊", active: true },
    { name: "Investing", tab: 2, icon: "💹" },
    { name: "Staking", tab: 3, icon: "🔒" },
    { name: "Transfer", tab: 4, icon: "💸" },
    { name: "Pool", tab: 5, icon: "🏊‍♂️" },
    { name: "ICO Token", tab: 6, icon: "🪙" },
  ];

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24">
        <div className="card card-spacious">
          <h3 className="text-xl font-bold gradient-text mb-6">Navigation</h3>
          
          <ul className="space-y-2" role="tablist">
            {navItems.map((item, index) => (
              <ButtonCmp
                key={index}
                name={item.name}
                tab={item.tab}
                icon={item.icon}
                styleClass={item.active ? "active" : ""}
              />
            ))}
          </ul>
          
          {/* Admin Info */}
          <div className="mt-8 p-4 bg-tertiary rounded-xl border border-border-secondary">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="font-semibold text-primary">Admin</div>
                <div className="text-xs text-secondary">Super User</div>
              </div>
            </div>
            <div className="text-xs text-muted">
              Full access to all administrative functions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;