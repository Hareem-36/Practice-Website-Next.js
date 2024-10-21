import Image from 'next/image';
import leftImage from '@/app/image/Rectangle 12.png';  // Replace with the correct image path
import rightImage from '@/app/image/image 15.png';     // Replace with the correct image path
import image1 from '@/app/image/image 16.png';         // Replace with the correct image path
import image2 from '@/app/image/image 17.png';         // Replace with the correct image path
import image3 from '@/app/image/image 18.png';         // Replace with the correct image path

export default function ProjectPage() {
  return (
    <div className="flex flex-col justify-center items-center h-auto bg-white">
      {/* First row of two images */}
      <div className="w-full md:w-[1200px] h-auto bg-white p-8 shadow-lg flex flex-col md:flex-row justify-between mb-8">
        {/* Left Image */}
        <div className="w-full md:w-[570px] h-[225px] mb-4 md:mb-0">
          <Image
            src={leftImage}
            alt="Left Image"
            width={570}
            height={225}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Gap between the images */}
        <div className="mx-0 md:mx-4"></div>

        {/* Right Image */}
        <div className="w-full md:w-[570px] h-[225px]">
          <Image
            src={rightImage}
            alt="Right Image"
            width={570}
            height={225}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Second row of three images */}
      <div className="w-full md:w-[1200px] h-auto bg-white p-8 shadow-lg flex flex-col md:flex-row justify-between">
        {/* First Image: 270x225 */}
        <div className="w-full md:w-[270px] h-[225px] mb-4 md:mb-0">
          <Image
            src={image1}
            alt="First Image"
            width={270}
            height={225}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Gap between images */}
        <div className="mx-0 md:mx-4"></div>

        {/* Second Image: 470x225 */}
        <div className="w-full md:w-[470px] h-[225px] mb-4 md:mb-0">
          <Image
            src={image2}
            alt="Second Image"
            width={470}
            height={225}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Gap between images */}
        <div className="mx-0 md:mx-4"></div>

        {/* Third Image: 370x225 */}
        <div className="w-full md:w-[370px] h-[225px]">
          <Image
            src={image3}
            alt="Third Image"
            width={370}
            height={225}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
