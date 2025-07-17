import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { WalletAdapter } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

// App pages
import NewLandingPage from "./pages/NewLandingPage";
import UpcomingLaunches from "./pages/UpcomingLaunches";
import ApplyPage from "./pages/ApplyPage";
import LaunchpadPage from "./pages/LaunchpadPage";

// Import wallet adapter CSS
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // 🛡️ Prevent Brave from spoofing Phantom
  const isBraveFakingPhantom =
    typeof window !== "undefined" &&
    window.solana?.isBraveWallet === true &&
    window.solana?.isPhantom === true;

  const wallets: WalletAdapter[] = useMemo(() => {
    const baseWallets: WalletAdapter[] = [
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new TorusWalletAdapter(),
    ];

    if (!isBraveFakingPhantom) {
      baseWallets.unshift(new PhantomWalletAdapter());
    }

    return baseWallets;
  }, [isBraveFakingPhantom]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<NewLandingPage />} />
                <Route path="/upcoming" element={<UpcomingLaunches />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/launchpad" element={<LaunchpadPage />} />
              </Routes>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
