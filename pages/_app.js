import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Polygon Mainnet RPC URL
const Polygon_RPC_URL = process.env.NEXT_PUBLIC_Polygon_RPC_URL;
const EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const DECIMALS = process.env.NEXT_PUBLIC_NETWORK_DECIMALS;
const NAME = process.env.NEXT_PUBLIC_NETWORK_NAME;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

export default function App({ Component, pageProps }) {
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
    projectId: "YOUR_PROJECT_ID", // You'll need to get this from WalletConnect Cloud
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
      accentColor: "#562C7B",
      accentColorForeground: "#fff",
    },
  });

  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <Component {...pageProps} />
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>

      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/smooth-scrollbar.js"></script>
      <script src="js/splide.min.js"></script>
      <script src="js/three.min.js"></script>
      <script src="js/vanta.fog.min.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}