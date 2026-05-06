import { Link } from 'react-router-dom';
import TrackingCard from '../components/TrackingCard';
import ServicesPreview from '../components/ServicesPreview';
import QuickQuote from '../components/QuickQuote';
import ValueCards from '../components/ValueCards';

export default function Home() {
  return (
    <>
      <section className='hero'>
        <img
          className='hero-media'
          src='https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=2200&q=80'
          alt='Cargo ship and freight aircraft representing global logistics'
        />
        <div className='hero-overlay' aria-hidden='true' />
        <div className='container hero-content'>
          <h1 style={{ fontSize: '3rem', maxWidth: 560 }}>Comprehensive Shipping & Logistics Solutions</h1>
          <p style={{ maxWidth: 540 }}>Reliable logistics solutions for global and domestic shipping needs.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to='/quote' className='btn btn-green'>
              Get a Quote
            </Link>
            <Link to='/tracking' className='btn btn-purple'>
              Track Shipment
            </Link>
          </div>
        </div>
      </section>
      <TrackingCard />
      <ServicesPreview />
      <QuickQuote />
      <ValueCards />
    </>
  );
}
