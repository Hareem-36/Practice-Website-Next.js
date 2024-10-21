import Image from 'next/image';
import React from 'react';
import profile from '@/app/image/Group 11 1.png';
import profile1 from '@/app/image/Group 2.png';
import profile2 from '@/app/image/4 (1).png';

const Footer: React.FC = () => {
  return (
    <center>
      <footer className="w-full md:w-[1500px] h-auto md:h-[417px] bg-gray-800 text-white relative p-4">
        {/* First image */}
        <Image
          src={profile}
          alt="Footer Image"
          width={150}
          height={150}
          className="absolute"
          style={{ left: '116px', top: '58px' }} // Adjust for larger screens
        />

        {/* Second image */}
        <Image
          src={profile1}
          alt="Footer Image"
          width={605}
          height={229}
          className="absolute hidden sm:block" // Hide on small screens, show on medium+
          style={{ left: '360px', top: '58px' }} // Adjust for larger screens
        />

        {/* Third image */}
        <Image
          src={profile2}
          alt="Footer Image"
          width={193}
          height={64}
          className="absolute hidden md:block" // Hide on small screens, show on medium+
          style={{ left: '1035px', top: '58px' }} // Adjust for larger screens
        />

        {/* Footer content */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-lg md:text-xl font-semibold">Developed by Hareem Jaweid</p>
          <p className="text-xs md:text-sm mt-2">&copy; 2024 All Rights Reserved</p>
        </div>
      </footer>
    </center>
  );
};

export default Footer;
