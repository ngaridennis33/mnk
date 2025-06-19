'use client';

import { FaLightbulb, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa';

const MissionSection = () => {
  return (
    <section className="bg-primary-50 rounded-xl p-12 mb-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
        <p className="text-xl text-gray-700 mb-8">
          "To create symbiotic intelligence systems that amplify human potential while maintaining ethical boundaries and transparency."
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-primary-600 mb-4">
              <FaLightbulb className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Augmented Intelligence</h3>
            <p className="text-gray-600">We build tools that enhance human cognition, not replace it.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-primary-600 mb-4">
              <FaShieldAlt className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Ethical Framework</h3>
            <p className="text-gray-600">Every system undergoes rigorous ethical review before deployment.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
            <div className="text-primary-600 mb-4">
              <FaProjectDiagram className="text-3xl" />
            </div>
            <h3 className="font-bold text-dark mb-2">Neural Synthesis</h3>
            <p className="text-gray-600">Our proprietary architecture mimics human neural pathways.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;