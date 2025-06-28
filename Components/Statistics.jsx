import React from "react";

const Statistics = ({ poolDetails }) => {
  const stats = [
    {
      value: poolDetails?.totalDepositAmount || "0",
      label: "Total Value Locked",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-primary-500 to-secondary-500",
      icon: "💰"
    },
    {
      value: poolDetails?.poolInfoArray?.length || "0",
      label: "Active Pools",
      suffix: "Pools",
      gradient: "from-secondary-500 to-accent-500",
      icon: "🏊‍♂️"
    },
    {
      value: poolDetails?.poolInfoArray?.[0]?.apy || "0",
      label: "Highest APY",
      suffix: "%",
      gradient: "from-accent-500 to-primary-500",
      icon: "📈"
    },
    {
      value: "15,000+",
      label: "Active Users",
      suffix: "Users",
      gradient: "from-warning to-error",
      icon: "👥"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>
              
              {/* Value */}
              <div className={`stat-value bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {typeof stat.value === 'string' && stat.value.includes('+') 
                  ? stat.value 
                  : `${parseFloat(stat.value).toLocaleString()}`
                }
                {stat.suffix !== "Users" && stat.suffix !== "Pools" && (
                  <span className="text-sm ml-1">{stat.suffix}</span>
                )}
              </div>
              
              {/* Label */}
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;