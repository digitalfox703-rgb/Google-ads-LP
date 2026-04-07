'use client';

import { motion } from 'motion/react';

const sheetRows = [
  ['02/04', 'Search - Marque', '1 248 EUR', '12 410 EUR', '7 820 EUR', '3 140 EUR', 'OK'],
  ['03/04', 'PMax - Core', '2 032 EUR', '9 840 EUR', '5 990 EUR', '1 720 EUR', 'Alerte'],
  ['04/04', 'Search - Generic', '1 116 EUR', '4 190 EUR', '2 210 EUR', '540 EUR', 'Alerte'],
  ['05/04', 'Shopping', '1 564 EUR', '6 420 EUR', '3 780 EUR', '980 EUR', 'OK'],
  ['06/04', 'Retargeting', '640 EUR', '2 980 EUR', '1 160 EUR', '220 EUR', 'Alerte'],
  ['07/04', 'PMax - Brand', '934 EUR', '8 120 EUR', '6 430 EUR', '2 980 EUR', 'OK'],
];

export function ProprietaryMethod() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFCFC] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#FF3300]">
              Methode proprietaire
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
              Un fichier de pilotage qui confronte chaque jour Google Ads a la realite.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
              Nous croisons quotidiennement les donnees publicitaires avec des chiffres plus
              proches du reel: encaissements, marge, remboursements, commandes annulees et
              vraies ventes attribuables.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                Google Ads affiche une version marketing des performances.
              </div>
              <div className="rounded-2xl border border-[#FF3300]/20 bg-[#FFF7F4] px-4 py-4 text-sm font-medium text-neutral-900 shadow-sm">
                Notre methode proprietaire vient confronter ces chiffres tous les jours pour
                voir ce qui est vraiment encaissé, vraiment rentable, et vraiment scalable.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D0D7DE] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div className="flex items-center gap-2 border-b border-[#D0D7DE] bg-[#1F6F43] px-4 py-3 text-white">
                <div className="grid h-7 w-7 place-items-center rounded bg-white/15 text-xs font-semibold">
                  X
                </div>
                <p className="text-sm font-semibold">Pilotage-rentabilite-journalier.xlsx</p>
              </div>

              <div className="border-b border-[#D0D7DE] bg-[#F3F6F4] px-4 py-3">
                <div className="grid grid-cols-[0.65fr_1.25fr_repeat(5,minmax(90px,1fr))] gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#51606B]">
                  <span>Date</span>
                  <span>Campagne</span>
                  <span>Depense</span>
                  <span>CA Ads</span>
                  <span>CA reel</span>
                  <span>Marge</span>
                  <span>Verdict</span>
                </div>
              </div>

              <div className="relative bg-white">
                <div className="space-y-0 border-b border-[#D0D7DE]">
                  {sheetRows.map((row, index) => (
                    <div
                      key={`${row[0]}-${row[1]}`}
                      className={`grid grid-cols-[0.65fr_1.25fr_repeat(5,minmax(90px,1fr))] gap-2 px-4 py-3 text-sm text-[#1F2937] ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#FBFCFC]'
                      }`}
                    >
                      <span className="blur-[1.6px]">{row[0]}</span>
                      <span className="blur-[2px]">{row[1]}</span>
                      <span className="font-medium blur-[1.8px]">{row[2]}</span>
                      <span className="blur-[2px]">{row[3]}</span>
                      <span className="blur-[2px]">{row[4]}</span>
                      <span className="blur-[2px]">{row[5]}</span>
                      <span className="blur-[1.2px]">{row[6]}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.16))]" />
              </div>
            </div>

            <div className="absolute -left-2 top-16 max-w-[220px] rounded-2xl border-2 border-[#FF3300] bg-white/95 p-3 shadow-[0_18px_40px_rgba(255,51,0,0.14)]">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF3300]">
                Audit
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">
                Ici, on confronte le CA attribue par Google Ads au CA vraiment encaisse.
              </p>
            </div>

            <div className="absolute bottom-5 right-5 max-w-[250px] rounded-2xl border-2 border-[#FF3300] bg-white/95 p-3 shadow-[0_18px_40px_rgba(255,51,0,0.14)]">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF3300]">
                Audit
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">
                C'est ce controle quotidien qui rapproche enfin vos chiffres publicitaires du reel.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 flex justify-center"
        >
          <button className="bg-neutral-950 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-900 transition-colors shadow-xl shadow-neutral-950/10 ring-1 ring-neutral-950/5 flex items-center gap-3 group">
            Voir ou je perds de l'argent
            <span className="bg-[#FF3300] text-white p-1 rounded-full group-hover:translate-x-1 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
