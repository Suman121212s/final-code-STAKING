import React from "react";

const Statistics = ({ poolDetails }) => {
  const stats = [
    {
      value: poolDetails?.totalDepositAmount || "0",
      label: "Total Value Locked",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      color: "from-blue-500 to-cyan-500",
      icon: "💰"
    },
    {
      value: poolDetails?.poolInfoArray?.length || "0",
      label: "Active Pools",
      suffix: "Pools",
      color: "from-purple-500 to-pink-500",
      icon: "🏊‍♂️"
    },
    {
      value: poolDetails?.poolInfoArray?.[0]?.apy || "0",
      label: "Highest APY",
      suffix: "%",
      color: "from-emerald-500 to-teal-500",
      icon: "📈"
    },
    {
      value: "15,000+",
      label: "Active Users",
      suffix: "Users",
      color: "from-orange-500 to-red-500",
      icon: "👥"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-gray-600 group-hover:transform group-hover:scale-105">
                {/* Icon */}
                <div className="text-3xl mb-3">{stat.icon}</div>
                
                {/* Value */}
                <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {typeof stat.value === 'string' && stat.value.includes('+') 
                    ? stat.value 
                    : `${parseFloat(stat.value).toLocaleString()}`
                  }
                  {stat.suffix !== "Users" && stat.suffix !== "Pools" && (
                    <span className="text-sm ml-1">{stat.suffix}</span>
                  )}
                </div>
                
                {/* Label */}
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;