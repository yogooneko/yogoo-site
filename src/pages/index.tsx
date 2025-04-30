export default function Home() {
    return (
      <main className="bg-[#0a0f20] text-white min-h-screen flex flex-col items-center justify-center">
        
        {/* Hero Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-black">
          <img src="/logo.png" alt="Yogoo Logo" width="160" height="160" />
          <p className="mt-6 text-lg tracking-widest text-gray-300">
            Soft paws. Digital claws.
          </p>
        </section>
  
        {/* Cube Section */}
        <section className="py-16 px-6 bg-[#101828] w-full text-center">
          <img src="/sideimg.png" alt="Yogoo side image" width="500" height="500" className="mx-auto" />
          <p className="text-gray-400 mt-6">
            She doesn’t run. She orbits.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-yellow-400 transition">
            🐾 Leave your pawprint
          </button>
        </section>
  
        {/* Footer */}
        <footer className="py-4 bg-[#080d17] text-sm text-gray-500 w-full text-center">
          Made on Base 🟦 | brrrrism@gmail.com
        </footer>
  
      </main>
    );
  }
  