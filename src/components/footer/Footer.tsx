// Footer
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="border-t">
      <div className="">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 md:grid md:grid-cols-4 mx-auto">
          <div className="hidden md:block h-16 w-fit mt-2 md-block">
            <Link href="/" className="">
              <Image src="/icons/logo.svg" width={500} height={500} className="w-96 h-fit" alt="ZidiTrends Logo" />
            </Link>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Links</div>
            <Link className="my-3 block text-main" href="/">Home</Link>
            <Link className="my-3 block text-main" href="/about">About</Link>
            <Link className="my-3 block text-main" href="/work">Our Work</Link>
            <Link className="my-3 block text-main" href="/blog">Blog</Link>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <Link className="my-3 block text-main" href="/contact">Help Center</Link>
            <Link className="my-3 block text-main" href="/privacy-policy">Privacy Policy</Link>
            <Link className="my-3 block text-main" href="/terms-and-conditions">Terms and Conditions</Link>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <p className="my-3 block text-main">XXX XXXX, Floor 4 San Francisco, CA</p>
            <a className="my-3 block text-main break-words" href="mailto:info@ziditrends.gmail.com">
              info@ziditrends.gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="flex items-center gap-2">
            <a
              className="text-white bg-[#0077B5] hover:bg-[#005582] p-2 rounded-full inline-flex items-center justify-center"
              aria-label="Visit ZidiTrends LinkedIn"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="h-4 w-4" src="/icons/linkdIn.svg" width={30} height={30} alt="LinkedIn" />
            </a>

            <a
              className="text-white bg-[#FF0000] hover:bg-[#cc0000] p-2 rounded-full inline-flex items-center justify-center"
              aria-label="Visit ZidiTrends YouTube"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="h-4 w-4" src="/icons/youtube.svg" width={30} height={30} alt="YouTube" />
            </a>

            <a
              className="text-white bg-[#1877F2] hover:bg-[#145db7] p-2 rounded-full inline-flex items-center justify-center"
              aria-label="Visit ZidiTrends Facebook"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="h-4 w-4" src="/icons/facebook.svg" width={30} height={30} alt="Facebook" />
            </a>

            <a
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] p-2 rounded-full inline-flex items-center justify-center"
              aria-label="Visit ZidiTrends Instagram"
              href="/@username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="h-4 w-4" src="/icons/instagram.svg" width={30} height={30} alt="Instagram" />
            </a>

            <Link
              className="text-white bg-black hover:bg-gray-800 p-2 rounded-full inline-flex items-center justify-center"
              aria-label="Visit ZidiTrends on X"
              href="https://x.com/ZidiTrends"
              target="_blank"
            >
              <Image className="h-4 w-4" src="/icons/twitter.svg" width={30} height={30} alt="X (Twitter)" />
            </Link>
          </div>

          <div className="my-5 text-main">
            © Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;