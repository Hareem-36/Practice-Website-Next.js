import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/app/image/Group 11.png'; // Replace with the path to your logo image

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white text-black shadow-md">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="w-[150px] h-auto">
          <Image
            src={logo} // Replace with the path to your logo
            alt="Logo"
            width={150}
            height={50}
            objectFit="contain"
          />
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <b><Link href="/" className="hover:text-gray-700 transition-colors text-bold">Main</Link></b>
          <b><Link href="/gallery" className="hover:text-gray-700 transition-colors">Gallery</Link></b>
          <b><Link href="/projects" className="hover:text-gray-700 transition-colors">Projects</Link></b>
          <b><Link href="/certifications" className="hover:text-gray-700 transition-colors">Certifications</Link></b>
          <b><Link href="/contacts" className="hover:text-gray-700 transition-colors">Contacts</Link></b>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            {/* Menu icon can be added here for mobile view */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
