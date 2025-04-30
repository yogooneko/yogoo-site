import Image from "next/image";
import Head from "next/head";
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <ThirdwebProvider activeChain="base">
      <Head>
        <title>YOGOO</title>
      </Head>

      <main className="bg-[#0a0f20] text-white min-h-screen flex flex-col items-center justify-center space-y-12 p-4">
        {/* Hero Section */}
        <section className="text-center">
          <Image
            src="/logo.png"
            alt="Yogoo Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="mt-6 text-xl tracking-widest text-gray-300">
            Soft paws. Digital claws.
          </p>
        </section>

        {/* Side Section */}
        <section className="text-center">
          <Image
            src="/sideimg.png"
            alt="Yogoo side image"
            width={200}
            height={200}
            className="mx-auto rounded-xl"
          />
          <p className="mt-4 text-sm text-gray-400">
            She doesn’t run. She orbits.
          </p>
          <button className="mt-6 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-yellow-400 transition">
            🐾 Leave your pawprint
          </button>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-[#080d17] text-sm text-gray-500 w-full text-center">
          <div>Made on Base 🟦 | brrrrism@gmail.com</div>
          <div className="mt-1 text-xs text-gray-600">
            Contract: 0x5B97C45ab10f4a062b7229D3649A521e9C1a5e0F
            <br />
            Total Supply: 20,237,230,000 YOGOO
          </div>
        </footer>
      </main>
    </ThirdwebProvider>
  );
}
