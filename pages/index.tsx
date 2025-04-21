import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import Head from "next/head";

export default function Home() {
  return (
    <ThirdwebProvider activeChain="base">
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff8f0] text-[#222]">
        <Head>
          <title>YOGOO</title>
        </Head>

        <main className="text-center p-6">
          <img src="/logo.png" alt="Yogoo logo" className="w-32 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Soft paws. Digital claws.</h1>
          <p className="text-lg mb-6">Lives on Base. Sleeps on chain.</p>
          
          <ConnectWallet className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition" />

          <div className="mt-6 text-sm text-gray-600">
            <p>Contract: 0x5B97C45ab10f4a062b7229D3649A521e9C1a5e0F</p>
            <p>Total Supply: 20,237,230,000 YOGOO</p>
          </div>
        </main>

        <footer className="mt-10 text-xs text-gray-500">
          <p>🐾 @yogoo_neko</p>
        </footer>
      </div>
    </ThirdwebProvider>
  );
}