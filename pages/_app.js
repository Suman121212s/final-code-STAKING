import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Polygon Mainnet RPC URL
const Polygon_RPC_URL = process.env.NEXT_PUBLIC_Polygon_RPC_URL;
const EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID; // Should be "137" for mainnet
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const DECIMALS = process.env.NEXT_PUBLIC_NETWORK_DECIMALS;
const NAME = process.env.NEXT_PUBLIC_NETWORK_NAME;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

export default function App({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [
      {
        id: Number(CHAIN_ID), // Should be 137 for Polygon mainnet
        name: NAME,
        network: NETWORK,
        nativeCurrency: {
          name: NAME,
          symbol: CURRENCY,
          decimals: Number(DECIMALS),
        },
        rpcUrls: {
          default: {
            http: [Polygon_RPC_URL],
          },
          public: {
            http: [Polygon_RPC_URL],
          },
        },
        blockExplorers: {
          default: {
            name: "polygonscan",
            url: EXPLORER,
          },
        },
        testnet: false, // Mainnet, not testnet
      },
    ],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id === Number(CHAIN_ID)) {
            return { http: '${Polygon_RPC_URL}' };
          }
          return null;
        },
        priority: 1,
      }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "StakingDapp",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const myTheme = merge(midnightTheme(), {
    colors: {
      accentColor: "#562C7B",
      accentColorForeground: "#fff",
    },
  });

  return (
    <>
      <WagmiConfig client={wagmiClient}>
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
