import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../Context/index";
import { FaRegCopy } from "../Components/ReactICON";

const Notification = ({ poolDetails, page }) => {
  const notificationsArray = poolDetails?.notifications ?? [];
  
  const getTransactionTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'deposit':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'withdraw':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'claim':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        {page !== "activity" && (
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">LIVE TRANSACTIONS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Real-time</span> Activity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              MECOIN is now delivering live, real-time data straight from the blockchain. 
              Stay ahead of the game with instant insights into transactions, token flows, and more.
            </p>
          </div>
        )}

        {/* Transactions Table */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-50"></div>
          
          {/* Main Container */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto scrollable-div">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">Type</th>
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">Token</th>
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">User</th>
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">Pool ID</th>
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">Amount</th>
                    <th className="text-left py-6 px-6 text-gray-400 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notificationsArray
                    .slice(0, 10)
                    .map((notify, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors duration-300"
                      >
                        {/* Transaction Type */}
                        <td className="py-6 px-6">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTransactionTypeColor(notify?.typeOf)}`}>
                            {notify?.typeOf}
                          </div>
                        </td>

                        {/* Token Info */}
                        <td className="py-6 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {poolDetails?.rewardToken.symbol?.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-medium">
                                {poolDetails?.rewardToken.symbol}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {poolDetails?.rewardToken.name}
                              </div>
                            </div>
                            <button
                              onClick={() => copyAddress(poolDetails?.rewardToken.address)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <FaRegCopy className="w-4 h-4" />
                            </button>
                          </div>
                        </td>

                        {/* User Address */}
                        <td className="py-6 px-6">
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-mono text-sm">
                              {SHORTEN_ADDRESS(notify?.user)}
                            </span>
                            <button
                              onClick={() => copyAddress(notify?.user)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <FaRegCopy className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                        {/* Pool ID */}
                        <td className="py-6 px-6">
                          <div className="inline-flex items-center px-2 py-1 bg-gray-800 rounded-lg">
                            <span className="text-white text-sm font-medium">
                              #{String(notify?.poolID).padStart(2, '0')}
                            </span>
                          </div>
                        </td>

                        {/* Amount */}
                        <td className="py-6 px-6">
                          <div className="text-white font-semibold">
                            {parseFloat(notify?.amount).toLocaleString()} {poolDetails?.rewardToken.symbol}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="py-6 px-6">
                          <div className="text-gray-400 text-sm">
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
          <div className="text-center mt-12">
            <a
              href="/activities"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <span>View All Activities</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">All transactions are verified on the blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;