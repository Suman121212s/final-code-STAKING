import React from "react";

const AdminCard = ({ name, value, icon = "📊", gradient = "from-primary-500 to-secondary-500" }) => {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity`}></div>
      
      {/* Main Card */}
      <div className="relative card card-compact h-full">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted uppercase tracking-wider font-medium">
              {name}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-mono`}>
            {value}
          </div>
          <div className="text-sm text-secondary">
            {name}
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12"></div>
      </div>
    </div>
  );
};

export default AdminCard;