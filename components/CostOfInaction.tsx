'use client';

import { motion } from 'motion/react';
import { TrendingDown, AlertTriangle, Lock, Activity } from 'lucide-react';

const losses = [
  {
    icon: TrendingDown,
    text: "Budget gaspillé sans le savoir",
  },
  {
    icon: AlertTriangle,
    text: "Fausses décisions basées sur de mauvais chiffres",
  },
  {
    icon: Lock,
    text: "Croissance bloquée malgré de “bons résultats”",
  },
  {
    icon: Activity,
    text: "Dépendance à Google et aux dashboards",
  }
];

export function CostOfInaction() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-neutral-200/50">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
            Le vrai risque n’est pas de tester.<br />
            <span className="text-[#FF3300]">C’est de continuer sans savoir.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
          {losses.map((loss, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F9F9F9] border border-neutral-200/60 p-8 rounded-2xl flex flex-col items-start gap-6 hover:border-[#FF3300]/40 transition-colors group"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-200/50 text-neutral-500 group-hover:text-[#FF3300] group-hover:bg-[#FF3300]/10 transition-colors">
                <loss.icon className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium text-neutral-900 leading-snug">
                {loss.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-neutral-950 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-900 transition-colors shadow-xl shadow-neutral-950/10 ring-1 ring-neutral-950/5">
            Diagnostiquer ma rentabilité
          </button>
        </motion.div>

      </div>
    </section>
  );
}
