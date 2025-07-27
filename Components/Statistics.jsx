import React from "react";

const Statistics = ({ poolDetails }) => {
  const stats = [
    {
      value: poolDetails?.totalDepositAmount || "0",
      label: "Total Value Locked",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-green-400 to-emerald-500",
      icon: "💰",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      value: poolDetails?.poolInfoArray?.length || "0",
      label: "Active Pools",
      suffix: "Pools",
      gradient: "from-blue-400 to-cyan-500",
      icon: "🏊‍♂️",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      value: poolDetails?.poolInfoArray?.[0]?.apy || "0",
      label: "Highest APY",
      suffix: "%",
      gradient: "from-purple-400 to-pink-500",
      icon: "📈",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      value: "15,000+",
      label: "Active Users",
      suffix: "Users",
      gradient: "from-orange-400 to-red-500",
      icon: "👥",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-gray-900/90 backdrop-blur-xl border ${stat.borderColor} rounded-3xl p-8 text-center transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-1`}>
                
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 font-mono group-hover:scale-110 transition-transform duration-300`}>
                  {typeof stat.value === 'string' && stat.value.includes('+') 
                    ? stat.value 
                    : `${parseFloat(stat.value).toLocaleString()}`
                  }
                  {stat.suffix !== "Users" && stat.suffix !== "Pools" && (
                    <span className="text-lg ml-1">{stat.suffix}</span>
                  )}
                </div>
                
                {/* Label */}
                <div className="text-gray-300 font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;