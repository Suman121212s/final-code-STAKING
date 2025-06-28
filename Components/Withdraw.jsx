import React from "react";
import { MdOutlineAttachMoney, FaRegCopy } from "./ReactICON/index";

const Withdraw = ({ setWithdrawPoolID, poolDetails }) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];
  
  const poolGradients = [
    "from-primary-500 to-secondary-500",
    "from-secondary-500 to-accent-500", 
    "from-accent-500 to-primary-500"
  ];

  return (
    <section id="crypto" className="py-20 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-accent-300">REWARDS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Claim</span> Your Rewards
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Withdraw your staked tokens and claim accumulated rewards from our secure staking pools. 
            Your earnings are ready to be claimed anytime.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="pool-grid">
          {poolArray.slice(0, 3).map((pool, index) => (
            <div
              key={index}
              className="pool-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="pool-header">
                <div className={`w-12 h-12 bg-gradient-to-r ${poolGradients[index]} rounded-xl flex items-center justify-center shadow-lg`}>
                  <MdOutlineAttachMoney className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-secondary">Pool #{index + 1}</div>
                  <div className="text-lg font-bold text-primary font-mono">{pool.lockDays} Days</div>
                </div>
              </div>

              {/* Staked Amount */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold gradient-text mb-2 font-mono">
                  {pool.amount || "0"}
                </div>
                <div className="text-secondary">{pool?.rewardToken.symbol} Staked</div>
              </div>

              {/* Rewards Display */}
              <div className="text-center mb-8 p-6 bg-gradient-to-r from-success/10 to-accent-500/10 border border-success/20 rounded-xl">
                <div className="text-sm text-secondary mb-1">Available Rewards</div>
                <div className="text-3xl font-bold text-success font-mono">
                  {pool?.userReward || "0"} {pool?.rewardToken.symbol}
                </div>
              </div>

              {/* Pool Details */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">APY:</span>
                  <span className="text-primary font-medium font-mono">{pool?.apy}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Last Reward:</span>
                  <span className="text-primary font-medium font-mono">
                    {pool?.lastRewardAt} {pool?.rewardToken.symbol}
                  </span>
                </div>
              </div>

              {/* Token Addresses */}
              <div className="space-y-2 mb-8 p-4 bg-tertiary rounded-xl border border-border-secondary">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-secondary">Stake Token:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary font-mono">
                      {pool?.depositToken.address.slice(0, 6)}...{pool?.depositToken.address.slice(-4)}
                    </span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <FaRegCopy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-secondary">Reward Token:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary font-mono">
                      {pool?.rewardToken.address.slice(0, 6)}...{pool?.rewardToken.address.slice(-4)}
                    </span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(pool?.rewardTokenAddress)}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <FaRegCopy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full btn btn-primary btn-lg bg-gradient-to-r ${poolGradients[index]} hover:scale-105`}
                data-bs-target="#modal-node"
                type="button"
                data-bs-toggle="modal"
                onClick={() => setWithdrawPoolID(index)}
              >
                Withdraw / Claim
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-xl">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-secondary">Instant withdrawals available after lock period</span>
          </div>
          
          <div className="text-sm text-muted max-w-2xl mx-auto">
            Note: Withdrawing before the lock period ends may result in penalty fees. 
            Rewards can be claimed at any time without penalties.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;