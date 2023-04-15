import { Hero, FeaturedGrid, ServiceGrid } from '../containers';
import { Navigation, Responsitivity, Footer } from '../components';
import 'atropos/css';
import FloatingBanner from '@/components/FloatingBanner';

export default function Home() {

  return (
    <main>
      <FloatingBanner />
      <Navigation />
        <Hero />
        <FeaturedGrid />
        <Responsitivity />
        <ServiceGrid />
      <Footer />
    </main>
  );
}
