'use client';

import Image from 'next/image';
import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="lg:text-center">
          <h2 className="mb-4 text-pink-700 bg-pink-100 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            What We Stand For
          </h2>
          <p className="text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Every mother deserves safety. Every child deserves a chance.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
  We are committed to providing essential care, education, and resources to mothers and newborns in vulnerable communities. Through partnerships, compassion, and action&mdash;we&rsquo;re building healthier beginnings, one birth at a time.
</p>

        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                <Image
                                    fill
                                    src="https://www.svgrepo.com/show/503138/webpack.svg"
                                    alt="API Settings Icon"
                                    sizes="48px"
                                    className="object-contain"
                                />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-gray-800">
                  Access to Care
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                We partner with clinics and midwives to ensure mothers receive essential prenatal, delivery, and postnatal services—especially in underserved areas.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                <Image
                                    fill
                                    src="https://www.svgrepo.com/show/503138/webpack.svg"
                                    alt="API Settings Icon"
                                    sizes="48px"
                                    className="object-contain"
                                />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-gray-800">
                  Education & Empowerment
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                From birth preparedness to breastfeeding support, we equip mothers with knowledge and confidence to care for their babies and themselves.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                <Image
                                    fill
                                    src="https://www.svgrepo.com/show/503138/webpack.svg"
                                    alt="API Settings Icon"
                                    sizes="48px"
                                    className="object-contain"
                                />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-gray-800">
                  Community First
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                We collaborate with local leaders, health workers, and volunteers to ensure long-lasting, culturally sensitive impact rooted in trust and care.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                <Image
                                    fill
                                    src="https://www.svgrepo.com/show/503138/webpack.svg"
                                    alt="API Settings Icon"
                                    sizes="48px"
                                    className="object-contain"
                                />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-gray-800">
                  Transparent Giving
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Every contribution counts. We provide transparent reporting on how your donations are used to help mothers and babies thrive.
              </dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;