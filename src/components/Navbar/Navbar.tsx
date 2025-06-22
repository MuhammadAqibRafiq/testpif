import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '../ui/Button/Button';
import { constants } from '@/Contants/constants';
import PIFLogo from '@/assets/images/PIFLogo.png';

const Navbar = () => {
  return (

    <nav className="flex items-center justify-between px-8 h-16 bg-[var(--background-paper)] border-b border-grey-200 dark:border-grey-800 transition-colors duration-200">

      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={PIFLogo} alt="PIF Logo" width={40} height={40} className="transition-transform hover:scale-105" />
        </Link>
      </div>

      {/* Navbar links */}
      <div className="flex items-center justify-center space-x-8">
        <Link href="#features" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Features
        </Link>
        <Link href="/reports" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Halal Reports
        </Link>
        <Link href="/watchlist" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Watchlist
        </Link>
        <Link href="/portfolio" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Portfolio
        </Link>
        <Link href="/pricing" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Pricing
        </Link>
        <Link href="/blog" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Blog
        </Link>
      </div>

      {/* Login and Get Started buttons */}
      <div className="flex items-center space-x-4">
        {/* <ThemeToggle />  Dark mode toggle */}
        <Link href={constants.getStarted.href} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            color="primary"
            size="medium"
          >
            Get started
          </Button>
        </Link>
        <Link href={constants.login.href} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outlined"
            color="primary"
            size="medium"
          >
            Log in
          </Button>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar; 