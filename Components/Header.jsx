import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";

//INTERNAL IMPORT
import {
  FaWallet,
  MdAdminPanelSettings,
  MdGeneratingTokens,
} from "../Components/ReactICON/index";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Header = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { address } = useAccount();

  const navigation = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Staking",
      link: "#staking",
    },
    {
      name: "Analytics",
      link: "#crypto",
    },
    {
      name: "Rewards",
      link: "#partners",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold gradient-text">MECOIN</span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={
                    page === "activity"
                      ? "/"
                      : page === "admin"
                      ? "/"
                      : `${item.link}`
                  }
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* ICO Button */}
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <MdGeneratingTokens className="w-5 h-5" />
                <span>MECOIN ICO</span>
              </button>

              {/* Connect Wallet */}
              <div className="connect-wallet-wrapper">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                          'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                              >
                                <FaWallet className="w-5 h-5" />
                                <span>Connect Wallet</span>
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
                              >
                                Wrong network
                              </button>
                            );
                          }

                          return (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                              >
                                {chain.hasIcon && (
                                  <div className="w-5 h-5">
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        className="w-5 h-5"
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                              >
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ''}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>

              {/* Admin Panel Link */}
              {address?.toLowerCase() === ADMIN_ADDRESS?.toLowerCase() && (
                <a
                  href="/admin"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <MdAdminPanelSettings className="w-5 h-5" />
                  <span className="hidden sm:inline">Admin</span>
                </a>
              )}

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;