import React from 'react';
import Image from 'next/image';
import profile1 from '@/app/image/Rectangle 9.png';

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Left Images */}
        <div className="flex flex-col space-y-4">
          <Image
            src={profile1}
            alt="Second"
            width={400}
            height={700}
            className="object-cover"
          />
        </div>

        {/* Right Text & Button */}
        <div className="flex flex-col justify-between ml-4 mt-4 md:mt-0">
          <div className="w-[400px] h-[200px] bg-white p-4">
          <p className="text-1xl text-gray-700 leading-relaxed mt-4 mb-6">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
<b><p className="text-2xl text-blue-800 leading-relaxed mt-4 mb-6 text-bold">Developd By : Hareem Jaweid </p></b>
          </div>
          <button className="w-[221px] h-[71px] bg-blue-500 text-white mt-4 md:mt-0">
            Read More 
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
