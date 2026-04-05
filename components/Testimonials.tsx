'use client';

import { motion } from 'motion/react';
import { ArrowDownRight, AlertCircle, FileWarning } from 'lucide-react';

const testimonials = [
  {
    metric: "-30%",
    label: "Marge réelle",
    insight: "On pensait être rentable. On perdait 30% de marge sans le voir.",
    icon: ArrowDownRight,
    status: "critical"
  },
  {
    metric: "0.8",
    label: "ROAS Bancaire",
    insight: "Le ROAS affichait 4 sur Google. La réalité bancaire affichait 0.8.",
    icon: AlertCircle,
    status: "warning"
  },
  {
    metric: "€12k",
    label: "Pertes mensuelles",
    insight: "Des milliers d'euros sauvés en identifiant les fausses conversions.",
    icon: FileWarning,
    status: "alert"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm relative overflow-hidden"
            >
              {/* Diagnostic styling elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3300] to-[#CC2900] opacity-90" />
              <div className="absolute top-4 right-4 text-neutral-300">
                <testi.icon className="w-5 h-5" />
              </div>
              
              <div className="font-mono text-xs text-neutral-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3300] animate-pulse" />
                Snapshot Report #{104 + index}
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-neutral-950 tracking-tighter mb-1 font-mono">
                  {testi.metric}
                </div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                  {testi.label}
                </div>
              </div>

              <div className="w-full h-px bg-neutral-100 mb-6" />

              <p className="text-lg font-medium text-neutral-800 leading-snug">
                "{testi.insight}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
