import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Google Ads Profitability Diagnostic',
  description: 'Votre Google Ads est rentable. En réalité, il vous fait perdre de l’argent.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#FCFCFC] text-neutral-950 antialiased selection:bg-[#FF3300]/20 selection:text-[#FF3300]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
