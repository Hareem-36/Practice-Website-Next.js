import Image from 'next/image';
import rightSideImage from '@/app/image/image 12.png'; // Replace with your image path

export default function ContactUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-[1200px] h-auto bg-white p-8 shadow-lg flex flex-col lg:flex-row">
        {/* Left side with input fields */}
        <div className="w-full lg:w-[391px] space-y-4 mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-400">Contact Us</h2>

          {/* Name input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[46px] border border-gray-300 px-4"
          />

          {/* Phone number input */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full h-[46px] border border-gray-300 px-4"
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[46px] border border-gray-300 px-4"
          />

          {/* Interested in input */}
          <input
            type="text"
            placeholder="Interested In"
            className="w-full h-[46px] border border-gray-300 px-4"
          />

          {/* Message input */}
          <textarea
            placeholder="Message"
            className="w-full h-[100px] border border-gray-300 px-4 resize-none"
          ></textarea>

          {/* Submit button */}
          <button className="w-full h-[46px] bg-slate-950 text-white font-bold hover:bg-blue-900 transition-colors">
            Send Email
          </button>
        </div>

        {/* Right side div with image */}
        <div className="w-full lg:w-[749px] h-[369px] bg-white flex items-center justify-center">
          <Image
            src={rightSideImage} // Replace this with the actual path of your image
            alt="Right side image"
            width={600}
            height={369}
            objectFit="cover" // Ensure the image fits well
          />
        </div>
      </div>
    </div>
  );
}
