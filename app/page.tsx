import { Hero } from '@/components/Hero';
import { CostOfInaction } from '@/components/CostOfInaction';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <CostOfInaction />
      <Testimonials />
      <Footer />
    </main>
  );
}
