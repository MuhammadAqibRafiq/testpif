'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '../ui/Button/Button';
import { constants } from '@/Contants/constants';
import PIFLogo from '@/assets/images/PIFLogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ height: 'var(--navbar-height)' }}
      className="fixed top-0 left-0 w-full bg-white z-50 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full max-xl:px-[24px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={PIFLogo} alt="PIF Logo" width={40} height={40} className="transition-transform hover:scale-105" />
          </Link>
        </div>

        {/* Desktop Navbar links */}
        <div className="hidden lg:flex items-center justify-center space-x-8">
          <Link href="#features" className={styles.navLink}>
            Features
          </Link>
          <Link href="/reports" className={styles.navLink}>
            Halal Reports
          </Link>
          <Link href="/watchlist" className={styles.navLink}>
            Watchlist
          </Link>
          <Link href="/portfolio" className={styles.navLink}>
            Portfolio
          </Link>
          <Link href="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
        </div>

        {/* Desktop Buttons (visible only on lg and up) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href={constants.getStarted.href} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" size="medium">
              Get started
            </Button>
          </Link>
          <Link href={constants.login.href} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" size="medium">
              Log in
            </Button>
          </Link>
        </div>

        {/* On small screens: Get started button before hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Link href={constants.getStarted.href} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" size="small">
              Get started
            </Button>
          </Link>
          {/* Hamburger Icon */}
          <button
            className="flex items-center justify-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[var(--background-paper)] border-b border-grey-200 dark:border-grey-800 shadow-lg z-50 flex flex-col items-center space-y-4 py-6 lg:hidden">
            <Link href="#features" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/reports" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Halal Reports
            </Link>
            <Link href="/watchlist" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Watchlist
            </Link>
            <Link href="/portfolio" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/pricing" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href={constants.login.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              <Button variant="outlined" color="primary" size="medium">
                Log in
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 