import React from "react";
import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Theme Provider
import { ThemeProvider } from "../Components";

// Polygon Mainnet RPC URL
const Polygon_RPC_URL = process.env.NEXT_PUBLIC_Polygon_RPC_URL;

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: 1000,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id === polygon.id) {
            return { http: Polygon_RPC_URL };
          }
          return null;
        },
        priority: 1,
      }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "StakingDapp",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });

  const myTheme = merge(midnightTheme(), {
    colors: {
      accentColor: "#3b82f6",
      accentColorForeground: "#fff",
      modalBackground: "var(--bg-secondary)",
      modalBorder: "var(--border-primary)",
    },
    radii: {
      actionButton: "12px",
      connectButton: "12px",
      menuButton: "12px",
      modal: "16px",
    },
  });

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains} theme={myTheme}>
            <Component {...pageProps} />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                },
                success: {
                  iconTheme: {
                    primary: 'var(--success)',
                    secondary: 'white',
                  },
                },
                error: {
                  iconTheme: {
                    primary: 'var(--error)',
                    secondary: 'white',
                  },
                },
              }}
            />
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>

      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/smooth-scrollbar.js"></script>
      <script src="js/splide.min.js"></script>
      <script src="js/three.min.js"></script>
      <script src="js/vanta.fog.min.js"></script>
      <script src="js/main.js"></script>
    </ThemeProvider>
  );
}