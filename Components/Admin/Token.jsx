import React from "react";

//INTERNAL IMPORT
import {
  FaWallet,
  MdAdminPanelSettings,
} from "../../Components/ReactICON/index";

const ADDRESS_EXPLORER = process.env.NEXT_PUBLIC_ADDRESS_EXPLORER;
const STAKING_DAPP = process.env.NEXT_PUBLIC_STAKING_DAPP;
const TOKEN_EXPLORER = process.env.NEXT_PUBLIC_TOKEN_EXPLORER;
const TOKEN = process.env.NEXT_PUBLIC_DEPOSIT_TOKEN;

const Token = ({ token }) => {
  const tokenStats = [
    {
      label: "Name",
      value: token?.name || "N/A",
      icon: "🏷️"
    },
    {
      label: "Symbol", 
      value: token?.symbol || "N/A",
      icon: "🔤"
    },
    {
      label: "Total Supply",
      value: `${token?.totalSupply || "0"} ${token?.symbol || ""}`,
      icon: "📊"
    },
    {
      label: "Total Stake",
      value: `${token?.contractTokenBalance || "0"} ${token?.symbol || ""}`,
      icon: "🔒"
    }
  ];

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🪙</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold gradient-text">Token Information</h3>
          <p className="text-secondary">Comprehensive token statistics and blockchain explorer</p>
        </div>
      </div>

      {/* Explorer Link */}
      <div className="mb-6 p-4 bg-tertiary rounded-xl border border-border-secondary">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-primary">Block Explorer</h4>
          <div className="flex items-center space-x-2">
            <FaWallet className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Contract Address</span>
          </div>
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control font-mono text-sm"
            value={`${ADDRESS_EXPLORER}${STAKING_DAPP}`}
            readOnly
          />
        </div>
        
        <p className="text-sm text-muted mt-2">
          Stake Token stats - Best return on your investment with MECOIN
        </p>
      </div>

      {/* Token Stats Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {tokenStats.map((stat, index) => (
          <div key={index} className="p-4 bg-tertiary rounded-xl border border-border-secondary">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{stat.icon}</span>
              <div className="flex-1">
                <div className="text-sm text-secondary">{stat.label}</div>
                <div className="font-semibold text-primary font-mono">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explorer Button */}
      <div className="text-center">
        <a
          href={`${TOKEN_EXPLORER}${TOKEN}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary group"
        >
          <MdAdminPanelSettings className="w-5 h-5" />
          <span>View on Explorer</span>
          <span className="font-mono text-sm">
            {token?.name} {token?.symbol}
          </span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Token;