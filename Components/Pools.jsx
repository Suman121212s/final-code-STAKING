import React from "react";
import { MdOutlineAttachMoney, FaRegCopy } from "./ReactICON/index";

const Pools = ({
  setPoolID,
  poolDetails,
  setSelectedPool,
  setSelectedToken,
}) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];

  const poolTypes = ["Premium", "Standard", "Basic"];
  const poolGradients = [
    "from-primary-500 to-secondary-500",
    "from-secondary-500 to-accent-500", 
    "from-accent-500 to-primary-500"
  ];

  return (
    <section id="staking" className="py-20 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-primary-300">STAKING POOLS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Maximize</span> Your Returns
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Choose from our carefully crafted staking pools designed to maximize your returns 
            while maintaining security and flexibility.
          </p>
        </div>

        {/* Pools Grid */}
        <div className="pool-grid">
          {poolArray.slice(0, 3).map((pool, index) => (
            <div
              key={index}
              className="pool-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Pool Type Badge */}
              <div className="pool-header">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${poolGradients[index]} bg-opacity-20 border border-primary-500/30 rounded-full`}>
                  <span className="text-sm font-medium text-white">{poolTypes[index]}</span>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${poolGradients[index]} rounded-xl flex items-center justify-center shadow-lg`}>
                  <MdOutlineAttachMoney className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* APY Display */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold gradient-text mb-2 font-mono">
                  {pool.apy}%
                </div>
                <div className="text-secondary">Annual Percentage Yield</div>
              </div>

              {/* Pool Stats */}
              <div className="pool-stats mb-8">
                <div className="pool-stat">
                  <div className="pool-stat-value">
                    {pool?.amount || "0"}
                  </div>
                  <div className="pool-stat-label">Your Stake</div>
                </div>
                <div className="pool-stat">
                  <div className="pool-stat-value text-success">
                    {pool?.userReward || "0"}
                  </div>
                  <div className="pool-stat-label">Rewards</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Lock Period</span>
                  <span className="text-primary font-medium font-mono">{pool.lockDays} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Total Deposited</span>
                  <span className="text-primary font-medium font-mono">
                    {pool?.depositedAmount} {pool?.depositToken.symbol}
                  </span>
                </div>
              </div>

              {/* Token Details */}
              <div className="space-y-3 mb-8 p-4 bg-tertiary rounded-xl border border-border-secondary">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Stake Token:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary font-medium font-mono">{pool?.depositToken.symbol}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <FaRegCopy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Reward Token:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary font-medium font-mono">{pool?.rewardToken.symbol}</span>
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
                data-bs-target="#modal-apool"
                type="button"
                data-bs-toggle="modal"
                onClick={() => {
                  setPoolID(index);
                  setSelectedPool(pool);
                  setSelectedToken(pool);
                }}
              >
                Start Staking
              </button>

              {/* Popular Badge for middle pool */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-warning to-accent-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-xl">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-secondary">All pools are secured by audited smart contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pools;