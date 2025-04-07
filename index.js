
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-black via-indigo-900 to-black animate-pulse opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      <motion.div
        className="z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/logo.png" alt="E.V. Nocturne Works Logo" className="w-40 h-40 object-contain drop-shadow-xl" />
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent text-center">
          E.V. Nocturne WORKS
        </h1>
        <p className="text-center text-lg md:text-xl text-white/80 max-w-xl">
          Portal to the Divine. Gateway to the Mythos.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-3 rounded-2xl border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-500 hover:text-black transition font-semibold text-lg shadow-xl">
          Enter the Realm
        </motion.button>
      </motion.div>

      <footer className="absolute bottom-4 text-xs text-white/50 text-center w-full z-10">
        <p>© 2025 E.V. Nocturne WORKS. All rights reserved. Mythos, image, and lore are the exclusive and divine property of Evania Voss Noctis. Not for minting, resale, or reproduction.</p>
      </footer>
    </div>
  );
}
