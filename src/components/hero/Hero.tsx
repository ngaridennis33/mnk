import Image from 'next/image';
import CallToActionHero from '../callToAction/CallToActionHero';

const Hero = () => {
    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-12 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    {/* LEFT TEXT SECTION */}
                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <p className="mt-1 text-4xl font-extrabold text-[#EA26C9] sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Support Mothers & Newborns{' '}
                            <span className="px-2 py-1 relative inline-block">
                                <svg
                                    className="stroke-kellygreen bottom-0 absolute text-rose-300 -translate-x-2"
                                    viewBox="0 0 410 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                                        strokeWidth="12"
                                        fill="none"
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="relative">with love</span>
                            </span>
                        </p>

                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
                            Join us in providing essential care, nourishment, and hope to mothers and their newborns in need.
                        </h3>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Prenatal Support</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Medical Aid</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Nutrition & Care</p>
                            </div>
                        </div>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/mnk.png" alt="Mother and Newborn" width={1000} height={805} />
                    </div>
                </div>

                {/* OPTIONAL CALL TO ACTION COMPONENT */}
                <CallToActionHero/>
            </div>
        </div>
    );
}

export default Hero;
