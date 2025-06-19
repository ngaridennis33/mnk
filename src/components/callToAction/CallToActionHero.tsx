'use client';

import AvatarGroup from "../avatar/Avatar";

const CallToActionHero = () => {
  return (
    <section className="text-black rounded-xl p-12 text-center">
      <AvatarGroup />

      <h2 className="text-3xl font-bold mb-6">
        Help Us Care for Mothers and Newborns
      </h2>

      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Your donation provides life-saving support—nutrition, healthcare, and hope—to vulnerable mothers and their babies.
      </p>

      <button className="bg-[#EA26C9] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#d11ab3] transition duration-300 shadow-lg">
        Donate Now
      </button>
    </section>
  );
};

export default CallToActionHero;