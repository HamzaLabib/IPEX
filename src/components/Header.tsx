import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/tracking', 'Tracking'],
  ['/quote', 'Get Quote'],
  ['/pay-online', 'Pay Online'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <Link className='brand' to='/' aria-label='IPEX Logistics Home'>
          <div className='brand-stripes' aria-hidden='true'>
            <span className='stripe stripe-green' />
            <span className='stripe stripe-purple' />
            <span className='stripe stripe-green' />
          </div>
          <div className='brand-text'>
            <div className='brand-name'>IPEX</div>
            <div className='brand-subtitle'>INTERNATIONAL PARCEL EXPRESS</div>
          </div>
        </Link>

        <button
          className='hamburger'
          aria-label='Toggle navigation menu'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`header-nav-wrap ${open ? 'open' : ''}`}>
          <nav className='header-nav'>
            {navLinks.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to='/contact' className='contact-btn' onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
