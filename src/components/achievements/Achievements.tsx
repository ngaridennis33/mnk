'use client';

const achievements = [
  { value: '37+', label: 'Peer-Reviewed Papers' },
  { value: '84+', label: 'Patents Granted' },
  { value: '22M+', label: 'Daily Predictions' },
  { value: '98%', label: 'Client Retention' },
];

const ImpactSection = () => {
  return (
    <section className="bg-black text-white rounded-xl p-12 mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {achievements.map((item, index) => (
          <div key={index}>
            <div className="text-5xl font-bold text-primary-400 mb-2">{item.value}</div>
            <div className="text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;