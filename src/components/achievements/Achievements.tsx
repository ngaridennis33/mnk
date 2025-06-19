'use client';

const achievements = [
  { value: '5,200+', label: 'Mothers Supported' },
  { value: '3,800+', label: 'Newborns Cared For' },
  { value: '120+', label: 'Health Clinics Partnered' },
  { value: '92%', label: 'Improved Health Outcomes' },
];

const ImpactSection = () => {
  return (
    <section className="bg-black text-white rounded-xl p-12 mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Impact Together</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {achievements.map((item, index) => (
          <div key={index}>
            <div className="text-5xl font-bold text-yellow-200 mb-2">{item.value}</div>
            <div className="text-rose-100">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;