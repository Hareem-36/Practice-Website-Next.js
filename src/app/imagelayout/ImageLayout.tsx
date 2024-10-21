import Image from 'next/image';
import React from 'react';
import leftImage from '@/app/image/Group 16.png';  // Replace with your left image path
import rightImage from '@/app/image/Group 15.png'; // Replace with your right image path

const ImageLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto bg-white p-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 text-gray-300">
        Main Focus / Mission Statement
      </h1>

      {/* Container for the images */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Left Image Div */}
        <div className="w-[423px] h-[144px] flex items-center justify-center bg-white shadow-lg">
          <Image
            src={leftImage} // Replace with your left image path
            alt="Left Image"
            width={423}
            height={144}
            objectFit="cover"
          />
        </div>

        {/* Right Image Div */}
        <div className="w-[423px] h-[144px] flex items-center justify-center bg-white shadow-lg">
          <Image
            src={rightImage} // Replace with your right image path
            alt="Right Image"
            width={423}
            height={144}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLayout;
