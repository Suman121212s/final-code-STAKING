import React, { useEffect, useState } from "react";

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
import List from "./RegularComp/List";

const Notification = ({ index, notify, poolDetails }) => {
  const [percentage, setPercentage] = useState();

  const gradients = [
    "from-primary-500 to-secondary-500",
    "from-accent-500 to-primary-500", 
    "from-secondary-500 to-accent-500",
    "from-warning to-error"
  ];

  const icons = ["💰", "📈", "🔒", "💸"];

  useEffect(() => {
    const calculatePercentage = () => {
      const amount = notify?.amount ?? 0;
      const percentageNew = (amount / 100) * 100;

      if (percentageNew === 0) {
        console.error("Token sale balance is zero, cannot calculate percentage.");
      } else {
        setPercentage(percentageNew);
      }
    };

    const timer = setTimeout(calculatePercentage, 1000);
    return () => clearTimeout(timer);
  }, [notify]);

  const currentGradient = gradients[index % gradients.length];
  const currentIcon = icons[index % icons.length];

  return (
    <div className="card group hover:scale-[1.02] transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`w-14 h-14 bg-gradient-to-r ${currentGradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-2xl">{currentIcon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">{notify?.typeOf}</h3>
            <p className="text-sm text-secondary">Pool #{String(notify?.poolID).padStart(2, '0')}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-secondary">Amount</div>
          <div className={`text-2xl font-bold bg-gradient-to-r ${currentGradient} bg-clip-text text-transparent font-mono`}>
            {notify?.amount}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          <List name="Pool ID" value={`#00-1${notify?.poolID}`} />
          <List name="Date" value={notify?.timestamp} />
        </div>
        <div className="space-y-3">
          <List name="Amount" value={`${notify?.amount} ${poolDetails?.rewardToken.symbol}`} />
          <List name="User" value={notify?.user} />
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-primary">Accrued Progress</h4>
          <span className={`px-3 py-1 bg-gradient-to-r ${currentGradient} bg-opacity-20 border border-primary-500/30 rounded-full text-sm font-medium text-primary`}>
            {percentage?.toString().slice(0, 2)}%
          </span>
        </div>
        
        <div className="progress">
          <div 
            className={`progress-bar bg-gradient-to-r ${currentGradient}`}
            style={{ width: `${percentage || 0}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-secondary">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Token Info */}
      <div className="mt-6 p-4 bg-tertiary rounded-xl border border-border-secondary">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 bg-gradient-to-r ${currentGradient} rounded-full flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">
                {poolDetails?.rewardToken.symbol?.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-medium text-primary">Reward Token</div>
              <div className="text-sm text-secondary">{poolDetails?.rewardToken.symbol}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-secondary">Network</div>
            <div className="font-medium text-primary">{CURRENCY}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;