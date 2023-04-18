import '../styles/global.scss'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { avalanche, bsc, bscTestnet } from '@wagmi/chains';


const { chains, provider } = configureChains(
  [bscTestnet],
  [
   // alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My JUTC Airdrop",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {



  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode  //<<<<<<<< coolMode
        chains={chains}
        theme={lightTheme({
          accentColor: "#623485", 
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
