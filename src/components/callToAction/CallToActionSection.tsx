'use client';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-Blueviolet to-kellygreen text-white rounded-xl p-12 text-center shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        Be the Reason a Child Takes Their First Breath Safely
      </h2>

      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Your support can provide a safe birth, a warm blanket, and a hopeful beginning. Join a growing community that believes no mother should face childbirth alone.
      </p>

      <button className="bg-[#EA26C9] text-rose-600 font-bold px-8 py-3 rounded-lg hover:bg-rose-100 transition duration-300 shadow-lg">
        Donate Now
      </button>
    </section>
  );
};

export default CallToActionSection;