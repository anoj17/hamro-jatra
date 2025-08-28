import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="-mt-3 flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="relative">
        <Image
          src="/logo/hamro-jatra-logo.jpg"
          alt="Logo"
          width={96}
          height={96}
          className="absolute inset-0 m-auto object-contain"
          priority // Optional: Ensures it's loaded immediately
        />
        {/* Spinning Loader */}
        <Loader2
          className="h-48 w-48 animate-spin text-red-800 opacity-50 "
          strokeWidth={0.8}
        />
      </div>
    </div>
  );
};

export default Loader;
