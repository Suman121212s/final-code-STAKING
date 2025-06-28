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
import ThemeToggle from "./ThemeToggle";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Header = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <header className={`navbar ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="navbar-brand">MECOIN</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
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
                  className="nav-link"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* ICO Button */}
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="hidden sm:flex btn btn-secondary btn-sm"
              >
                <MdGeneratingTokens className="w-4 h-4" />
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
                                className="btn btn-primary"
                              >
                                <FaWallet className="w-4 h-4" />
                                <span>Connect Wallet</span>
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="btn bg-error text-white hover:bg-red-700"
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
                                className="btn btn-ghost btn-sm"
                              >
                                {chain.hasIcon && (
                                  <div className="w-4 h-4">
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        className="w-4 h-4 rounded"
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="btn btn-secondary btn-sm font-mono"
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
                  className="btn btn-outline btn-sm"
                >
                  <MdAdminPanelSettings className="w-4 h-4" />
                  <span className="hidden sm:inline">Admin</span>
                </a>
              )}

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden btn btn-ghost btn-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border-primary">
              <nav className="flex flex-col space-y-2 mt-4">
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
                    className="nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  data-bs-target="#modal-deposit1"
                  type="button"
                  data-bs-toggle="modal"
                  className="btn btn-secondary btn-sm mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MdGeneratingTokens className="w-4 h-4" />
                  <span>MECOIN ICO</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;