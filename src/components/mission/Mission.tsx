'use client';

import { FaHeart, FaHandHoldingMedical, FaBaby } from 'react-icons/fa';

const MissionSection = () => {
  return (
    <section className="bg-pink-50 rounded-xl p-12 mb-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-600 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-700 mb-8">
          We are committed to nurturing new life by supporting mothers and their newborns through compassion, care, and community.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Love & Compassion */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-rose-500 mb-4">
              <FaHeart className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Love & Dignity</h3>
            <p className="text-gray-600">
              We believe every mother and child deserves to be welcomed with care and respect.
            </p>
          </div>

          {/* Medical Care */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-rose-500 mb-4">
              <FaHandHoldingMedical className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Safe Healthcare</h3>
            <p className="text-gray-600">
              Your support helps provide essential prenatal, delivery, and postnatal medical services.
            </p>
          </div>

          {/* Newborn Futures */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-rose-500 mb-4">
              <FaBaby className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Bright Beginnings</h3>
            <p className="text-gray-600">
              We create a nurturing foundation for newborns to thrive—one family at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;