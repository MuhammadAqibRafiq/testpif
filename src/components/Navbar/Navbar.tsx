import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 h-16 bg-[var(--background-paper)] border-b border-grey-200 dark:border-grey-800 transition-colors duration-200">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Images/PIF Logo.png" alt="PIF Logo" width={40} height={40} className="transition-transform hover:scale-105" />
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <Link href="/" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Home
        </Link>
        <Link href="/about" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          About
        </Link>
        <Link href="/features" className="text-[var(--text-primary)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
          Features
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/login" className="px-4 py-2 text-primary-500 border border-primary-500 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 font-medium">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-200 font-medium">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 