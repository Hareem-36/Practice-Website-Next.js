import Image from 'next/image';
import React from 'react';
import exampleImage from '@/app/image/Rectangle 6.png'; // Replace with your image path

const TextImageLayout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-white">
      {/* Left Side: Text Div */}
      <div className="w-[200px] h-[64px] bg-white flex justify-center items-center shadow-md md:w-[277.86px] md:h-[64px]">
        <p className="text-blue-800 font-bold text-center text-xl md:text-3xl">
          Project Lorum
        </p>
      </div>

      {/* Right Side: Image Div */}
      <div className="mt-4 md:ml-8 md:mt-0 w-full md:w-[770px] h-auto md:h-[829px] flex items-center justify-center bg-white shadow-md">
        <Image
          src={exampleImage} // Replace with your image path
          alt="Example Image"
          width={770}
          height={829}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default TextImageLayout;
