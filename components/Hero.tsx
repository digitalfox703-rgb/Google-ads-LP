'use client';

import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 mb-6 leading-[1.1]">
          Votre Google Ads est rentable.<br />
          <span className="text-neutral-400">En réalité, il vous fait perdre de l’argent.</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 mb-12 font-medium">
          Les chiffres semblent bons.<br />
          Votre business raconte autre chose.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl relative group cursor-pointer"
      >
        {/* Video Placeholder */}
        <div className="aspect-video bg-neutral-950 rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-neutral-950/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/80 to-transparent z-10" />
          
          {/* Abstract waveform/data visualization background for the placeholder */}
          <div className="absolute inset-0 opacity-20 flex items-center justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-[#FF3300] rounded-full"
                animate={{ height: ['20%', '80%', '40%', '100%', '30%'] }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 bg-[#FF3300] text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-[#FF3300]/20 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-neutral-500 font-mono flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-pulse" />
          Cas réel : des campagnes “rentables” qui détruisaient la marge.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <button className="bg-neutral-950 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-900 transition-colors shadow-xl shadow-neutral-950/10 ring-1 ring-neutral-950/5 flex items-center gap-3 group">
          Voir où je perds de l’argent
          <span className="bg-[#FF3300] text-white p-1 rounded-full group-hover:translate-x-1 transition-transform">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </button>
      </motion.div>

      {/* Scrolling Logos */}
      <div className="w-full mt-24 overflow-hidden mask-image-linear-gradient">
        <p className="text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">Ils ont audité leur rentabilité</p>
        <div className="flex gap-12 items-center whitespace-nowrap opacity-40 grayscale">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <LogoPlaceholder text="ACME CORP" />
                <LogoPlaceholder text="GLOBAL TECH" />
                <LogoPlaceholder text="NEXUS" />
                <LogoPlaceholder text="PULSE" />
                <LogoPlaceholder text="ELEVATE" />
                <LogoPlaceholder text="LUMINA" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ text }: { text: string }) {
  return (
    <div className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-2">
      <div className="w-6 h-6 bg-neutral-800 rounded-sm" />
      {text}
    </div>
  );
}
