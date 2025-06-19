'use client';

import Image from 'next/image';

const team = [
    {
      name: 'Dr. Achieng Odhiambo',
      role: 'Founder & Maternal Health Advocate',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'A public health expert with over 15 years of experience in improving maternal and child healthcare across rural Africa.',
    },
    {
      name: 'Daniel Kimani',
      role: 'Operations Lead',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Coordinates on-the-ground logistics and community outreach, ensuring aid reaches the families who need it most.',
    },
    {
      name: 'Sister Agnes Wanjiru',
      role: 'Lead Nurse & Birth Care Educator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'With 20+ years in midwifery, she trains birth attendants and provides compassionate care to expecting mothers.',
    },
  ];
  

const TeamSection = () => {
  return (
    <section className="mb-20">
  <h2 className="text-3xl font-bold text-dark mb-12 text-center">
    Meet the Team Behind the Mission
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {team.map((member, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-dark mb-1">{member.name}</h3>
          <p className="text-rose-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    // <section className="mb-20">
    //   <h2 className="text-3xl font-bold text-dark mb-12 text-center">Meet Our Leadership</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //     {team.map((member, index) => (
    //       <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
    //         <div className="relative w-full h-64">
    //           <Image
    //             src={member.image}
    //             alt={member.name}
    //             fill
    //             className="object-cover"
    //             sizes="(max-width: 768px) 100vw, 33vw"
    //           />
    //         </div>
    //         <div className="p-6">
    //           <h3 className="font-bold text-xl text-dark mb-1">{member.name}</h3>
    //           <p className="text-primary-600 font-medium mb-3">{member.role}</p>
    //           <p className="text-gray-600">{member.bio}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default TeamSection;