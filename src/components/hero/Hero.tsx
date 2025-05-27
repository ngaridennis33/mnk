// components/JewelryHero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex-1 h-[50vh]">
      <div
        className="h-full bg-[url('https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png')] bg-cover bg-top bg-no-repeat flex items-center text-white pl-[137px]"
      >
        <div className="flex flex-col">
          <div className="text-[34px] leading-8">Every piece of</div>
          <div className="text-[56px] font-medium mb-4">Jewelry tells a story</div>
          <p className="w-[397px] mb-[40px]">
            “A gentleman knows his appearance is very important that shows his
            characteristic.” - Unknown
          </p>
          <div className="flex gap-[16px]">
            <Link href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r" target="_blank" rel="noopener noreferrer">
              <button className="rounded-[4px] p-[12px] bg-white font-medium text-black">
                Donate
              </button>
            </Link>
            <button className="rounded-[4px] p-[12px] border-2 border-white text-white font-medium">
              New Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
