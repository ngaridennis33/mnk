'use client';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-Blueviolet to-kellygreen text-black rounded-xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Experience the SynthMind Difference</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join forward-thinking organizations leveraging our cognitive AI platform.
      </p>
      <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
        Donate to our Cause
      </button>
    </section>
  );
};

export default CallToActionSection;