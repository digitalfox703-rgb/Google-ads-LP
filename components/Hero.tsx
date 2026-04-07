'use client';

import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[4rem] font-bold tracking-[-0.04em] text-neutral-950 mb-8 leading-[0.98]">
          <span className="block">Vos chiffres Google Ads sont bons.</span>
          <span className="mt-3 block text-neutral-400">
            Alors pourquoi votre business
          </span>
          <span className="block text-neutral-400">ne decolle pas ?</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-[1.45rem] text-neutral-600 mb-12 font-medium leading-[1.3]">
          Parce que Google est optimise pour depenser votre budget, pas pour faire croitre votre marge.
          <br className="hidden sm:block" />
          Il est temps de sortir de la boite noire.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl relative"
      >
        <div className="aspect-video bg-neutral-950 rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-neutral-950/5">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/5ImfGehvZsU"
            title="Video YouTube Google Ads"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-sm text-neutral-500 font-mono flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-pulse" />
          Cas reel : des campagnes "rentables" qui detruisaient la marge.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <button className="bg-neutral-950 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-900 transition-colors shadow-xl shadow-neutral-950/10 ring-1 ring-neutral-950/5 flex items-center gap-3 group">
          Voir ou je perds de l'argent
          <span className="bg-[#FF3300] text-white p-1 rounded-full group-hover:translate-x-1 transition-transform">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </span>
        </button>
      </motion.div>

      <div className="w-full mt-24 overflow-hidden mask-image-linear-gradient">
        <p className="text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">Ils ont audite leur rentabilite</p>
        <div className="flex gap-12 items-center whitespace-nowrap opacity-40 grayscale">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <LogoPlaceholder text="BDOUIN (MUSLIM SHOW)" />
                <LogoPlaceholder text="DC JEANS" />
                <LogoPlaceholder text="MAKTABA TAWHID" />
                <LogoPlaceholder text="NEYSSA SHOP" />
                <LogoPlaceholder text="BIOMIEL AND CO" />
                <LogoPlaceholder text="MERKEZ AL BOURHAN" />
                <LogoPlaceholder text="CUSTOM QAMIS" />
                <LogoPlaceholder text="EL NABIL" />
                <LogoPlaceholder text="TAJWID INSTITUT" />
                <LogoPlaceholder text="MIEL ET VERTUS" />
                <LogoPlaceholder text="FRANCE MEKKAH" />
                <LogoPlaceholder text="SAYF" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AuditDashboardMock />
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

function AuditDashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="w-full mt-14"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-[0_30px_90px_rgba(10,10,10,0.08)] sm:p-6">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#DADCE0] bg-[#F8F9FA] text-left shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#DADCE0] bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute left-0 top-2 h-4 w-4 -skew-x-[18deg] rounded-sm bg-[#34A853]" />
                <div className="absolute left-2.5 top-0 h-7 w-3 -skew-x-[18deg] rounded-sm bg-[#4285F4]" />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#FBBC05]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#202124]">Google Ads</p>
                <p className="text-[11px] text-[#5F6368]">Vue d'ensemble</p>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-9 rounded-full border border-[#DADCE0] bg-[#F1F3F4]" />
            </div>
            <div className="hidden h-8 w-8 rounded-full bg-[#F1F3F4] sm:block" />
          </div>

          <div className="grid lg:grid-cols-[180px_minmax(0,1fr)]">
            <div className="hidden border-r border-[#DADCE0] bg-[#F8F9FA] p-3 lg:block">
              <div className="space-y-2">
                <SidebarItem active label="Vue d'ensemble" />
                <SidebarItem label="Campagnes" />
                <SidebarItem label="Insights" />
              </div>
            </div>

            <div className="relative bg-white">
              <div className="border-b border-[#DADCE0] px-4 py-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#202124]">Vue d'ensemble</p>
                    <p className="text-xs text-[#5F6368]">1 avr. 2026 - 30 avr. 2026</p>
                  </div>
                  <div className="rounded-full bg-[#E6F4EA] px-3 py-1 text-xs font-semibold text-[#137333]">
                    Performances en hausse
                  </div>
                </div>
              </div>

              <div className="grid gap-3 border-b border-[#DADCE0] bg-[#F8F9FA] px-4 py-4 md:grid-cols-3">
                <GoogleMetricCard label="Couts" value="5 960 EUR" delta="-12,4 %" />
                <GoogleMetricCard label="Conversions" value="312" delta="+18,9 %" />
                <GoogleMetricCard label="Valeur conv. / cout" value="4,8" delta="+21,7 %" />
              </div>

              <div className="grid gap-4 px-4 py-4 xl:grid-cols-[1.35fr_0.9fr]">
                <div className="rounded-2xl border border-[#DADCE0] bg-white p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#202124]">Performance</p>
                      <p className="text-xs text-[#5F6368]">Conversions et valeur de conversion</p>
                    </div>
                    <div className="rounded-md bg-[#F1F3F4] px-2.5 py-1 text-xs text-[#5F6368]">
                      Tous les clics
                    </div>
                  </div>

                  <div className="flex h-44 items-end gap-2 rounded-xl bg-[#F8F9FA] px-3 py-4">
                    <GoogleBar blue="42%" green="26%" />
                    <GoogleBar blue="49%" green="31%" />
                    <GoogleBar blue="53%" green="34%" />
                    <GoogleBar blue="61%" green="39%" />
                    <GoogleBar blue="68%" green="44%" />
                    <GoogleBar blue="64%" green="41%" />
                    <GoogleBar blue="79%" green="52%" />
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-xs text-[#5F6368]">
                    <LegendDot color="bg-[#1A73E8]" label="Conversions" />
                    <LegendDot color="bg-[#34A853]" label="Valeur conv." />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#DADCE0] bg-white p-4">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#202124]">Campagnes</p>
                    <p className="text-xs text-[#5F6368]">Resume rapide</p>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[#DADCE0]">
                    <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] bg-[#F8F9FA] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5F6368]">
                      <span>Campagne</span>
                      <span>Conv.</span>
                      <span>ROAS</span>
                    </div>
                    <CampaignRow name="Search - Marque" conversions="148" roas="8,2" muted />
                    <CampaignRow name="PMax - Best sellers" conversions="96" roas="4,9" />
                    <CampaignRow name="Search - Prospecting" conversions="38" roas="2,1" />
                  </div>
                </div>
              </div>

              <div className="absolute left-[18px] top-[146px] hidden max-w-[250px] rounded-2xl border-2 border-[#FF3300] bg-white/95 p-3 shadow-[0_18px_40px_rgba(255,51,0,0.16)] md:block">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF3300]">
                  Audit
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  45% du budget est gaspille. Et cela arrange autant votre annonceur que Google Ads.
                </p>
              </div>

              <div className="absolute right-[18px] top-[146px] hidden max-w-[220px] rounded-2xl border-2 border-[#FF3300] bg-white/95 p-3 shadow-[0_18px_40px_rgba(255,51,0,0.16)] md:block">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF3300]">
                  Audit
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Le ROAS est presque toujours gonfle par l'attribution Google Ads.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`rounded-xl px-3 py-2 text-sm ${
        active ? 'bg-[#E8F0FE] font-medium text-[#1967D2]' : 'text-[#5F6368]'
      }`}
    >
      {label}
    </div>
  );
}

function GoogleMetricCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl border border-[#DADCE0] bg-white px-4 py-3">
      <p className="text-xs text-[#5F6368]">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="text-2xl font-semibold tracking-tight text-[#202124]">{value}</p>
        <span className="rounded-full bg-[#E6F4EA] px-2.5 py-1 text-xs font-semibold text-[#137333]">
          {delta}
        </span>
      </div>
    </div>
  );
}

function GoogleBar({
  blue,
  green,
}: {
  blue: string;
  green: string;
}) {
  return (
    <div className="flex flex-1 items-end gap-1">
      <div className="w-1/2 rounded-t-md bg-[#1A73E8]" style={{ height: blue }} />
      <div className="w-1/2 rounded-t-md bg-[#34A853]" style={{ height: green }} />
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function CampaignRow({
  name,
  conversions,
  roas,
  muted = false,
}: {
  name: string;
  conversions: string;
  roas: string;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] border-t border-[#DADCE0] px-3 py-3 text-sm text-[#202124]">
      <span className={muted ? 'text-[#1967D2]' : ''}>{name}</span>
      <span>{conversions}</span>
      <span>{roas}</span>
    </div>
  );
}
