import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../Context/index";
import { FaRegCopy } from "../Components/ReactICON";

const Notification = ({ poolDetails, page }) => {
  const notificationsArray = poolDetails?.notifications ?? [];
  
  const getTransactionTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'deposit':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'withdraw':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'claim':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getTransactionIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'deposit':
        return '📈';
      case 'withdraw':
        return '📉';
      case 'claim':
        return '🎁';
      default:
        return '📊';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        {page !== "activity" && (
          <div className="text-center mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-blue-300">LIVE TRANSACTIONS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Real-time</span>
              <br />
              <span className="text-white">Activity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              MECOIN is now delivering live, real-time data straight from the blockchain. 
              Stay ahead of the game with instant insights into transactions, token flows, and more.
            </p>
          </div>
        )}

        {/* Enhanced Transactions Table */}
        <div className="relative animate-fade-in-up">
          {/* Enhanced Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50"></div>
          
          {/* Main Container */}
          <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto scrollable-div">
              <table className="table w-full">
                <thead>
                  <tr className="bg-gray-800/50">
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">Type</th>
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">Token</th>
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">User</th>
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">Pool ID</th>
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">Amount</th>
                    <th className="text-left py-6 px-6 text-gray-300 font-bold uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notificationsArray
                    .slice(0, 10)
                    .map((notify, index) => (
                      <tr 
                        key={index} 
                        className="hover:bg-gray-800/30 transition-colors border-b border-gray-700/30"
                      >
                        {/* Enhanced Transaction Type */}
                        <td className="py-6 px-6">
                          <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full text-sm font-bold border ${getTransactionTypeColor(notify?.typeOf)}`}>
                            <span className="text-lg">{getTransactionIcon(notify?.typeOf)}</span>
                            <span>{notify?.typeOf}</span>
                          </div>
                        </td>

                        {/* Enhanced Token Info */}
                        <td className="py-6 px-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                              <span className="text-white text-sm font-bold">
                                {poolDetails?.rewardToken.symbol?.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg">
                                {poolDetails?.rewardToken.symbol}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {poolDetails?.rewardToken.name}
                              </div>
                            </div>
                            <button
                              onClick={() => copyAddress(poolDetails?.rewardToken.address)}
                              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50"
                            >
                              <FaRegCopy className="w-4 h-4" />
                            </button>
                          </div>
                        </td>

                        {/* Enhanced User Address */}
                        <td className="py-6 px-6">
                          <div className="flex items-center space-x-3">
                            <span className="text-white font-mono text-sm bg-gray-700/50 px-3 py-2 rounded-lg">
                              {SHORTEN_ADDRESS(notify?.user)}
                            </span>
                            <button
                              onClick={() => copyAddress(notify?.user)}
                              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50"
                            >
                              <FaRegCopy className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                        {/* Enhanced Pool ID */}
                        <td className="py-6 px-6">
                          <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                            <span className="text-purple-300 text-sm font-bold font-mono">
                              #{String(notify?.poolID).padStart(2, '0')}
                            </span>
                          </div>
                        </td>

                        {/* Enhanced Amount */}
                        <td className="py-6 px-6">
                          <div className="text-white font-bold font-mono text-lg">
                            {parseFloat(notify?.amount).toLocaleString()} 
                            <span className="text-gray-400 text-sm ml-1">{poolDetails?.rewardToken.symbol}</span>
                          </div>
                        </td>

                        {/* Enhanced Date */}
                        <td className="py-6 px-6">
                          <div className="text-gray-300 text-sm font-medium">
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

        {/* Enhanced View All Button */}
        {page !== "activity" && (
          <div className="text-center mt-16 animate-fade-in-up">
            <a
              href="/activities"
              className="btn btn-primary btn-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 group"
            >
              <span>View All Activities</span>
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}

        {/* Enhanced Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">All transactions are verified on the blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;