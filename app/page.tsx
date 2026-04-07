import { Hero } from '@/components/Hero';
import { ProprietaryMethod } from '@/components/ProprietaryMethod';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <ProprietaryMethod />
      <Footer />
    </main>
  );
}
