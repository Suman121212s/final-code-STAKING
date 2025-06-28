import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../Context/index";
import { FaRegCopy } from "../Components/ReactICON";

const Notification = ({ poolDetails, page }) => {
  const notificationsArray = poolDetails?.notifications ?? [];
  
  const getTransactionTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'deposit':
        return 'text-success bg-success/10 border-success/20';
      case 'withdraw':
        return 'text-error bg-error/10 border-error/20';
      case 'claim':
        return 'text-info bg-info/10 border-info/20';
      default:
        return 'text-muted bg-muted/10 border-muted/20';
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Section Header */}
        {page !== "activity" && (
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-300">LIVE TRANSACTIONS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Real-time</span> Activity
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              MECOIN is now delivering live, real-time data straight from the blockchain. 
              Stay ahead of the game with instant insights into transactions, token flows, and more.
            </p>
          </div>
        )}

        {/* Transactions Table */}
        <div className="relative animate-fade-in-up">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur opacity-50"></div>
          
          {/* Main Container */}
          <div className="relative card overflow-hidden">
            <div className="overflow-x-auto scrollable-div">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Token</th>
                    <th>User</th>
                    <th>Pool ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notificationsArray
                    .slice(0, 10)
                    .map((notify, index) => (
                      <tr 
                        key={index} 
                        className="hover:bg-glass transition-colors"
                      >
                        {/* Transaction Type */}
                        <td>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTransactionTypeColor(notify?.typeOf)}`}>
                            {notify?.typeOf}
                          </div>
                        </td>

                        {/* Token Info */}
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {poolDetails?.rewardToken.symbol?.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="text-primary font-medium">
                                {poolDetails?.rewardToken.symbol}
                              </div>
                              <div className="text-secondary text-sm">
                                {poolDetails?.rewardToken.name}
                              </div>
                            </div>
                            <button
                              onClick={() => copyAddress(poolDetails?.rewardToken.address)}
                              className="text-secondary hover:text-primary transition-colors"
                            >
                              <FaRegCopy className="w-4 h-4" />
                            </button>
                          </div>
                        </td>

                        {/* User Address */}
                        <td>
                          <div className="flex items-center space-x-2">
                            <span className="text-primary font-mono text-sm">
                              {SHORTEN_ADDRESS(notify?.user)}
                            </span>
                            <button
                              onClick={() => copyAddress(notify?.user)}
                              className="text-secondary hover:text-primary transition-colors"
                            >
                              <FaRegCopy className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                        {/* Pool ID */}
                        <td>
                          <div className="inline-flex items-center px-2 py-1 bg-tertiary rounded-lg">
                            <span className="text-primary text-sm font-medium font-mono">
                              #{String(notify?.poolID).padStart(2, '0')}
                            </span>
                          </div>
                        </td>

                        {/* Amount */}
                        <td>
                          <div className="text-primary font-semibold font-mono">
                            {parseFloat(notify?.amount).toLocaleString()} {poolDetails?.rewardToken.symbol}
                          </div>
                        </td>

                        {/* Date */}
                        <td>
                          <div className="text-secondary text-sm">
                            {notify?.timestamp}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* View All Button */}
        {page !== "activity" && (
          <div className="text-center mt-12 animate-fade-in-up">
            <a
              href="/activities"
              className="btn btn-primary btn-lg group"
            >
              <span>View All Activities</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-xl">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-secondary">All transactions are verified on the blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;