'use client';

import Image from 'next/image';

const team = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Cognitive computing pioneer with a PhD in Computational Neuroscience from Stanford.',
  },
  {
    name: 'Raj Patel',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Former lead architect at DeepMind, specializes in neural-symbolic integration.',
  },
  {
    name: 'Dr. Kwame Nkosi',
    role: 'Chief Ethics Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Author of "The Moral Algorithm" and AI policy advisor to the EU Parliament.',
  },
];

const TeamSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-dark mb-12 text-center">Meet Our Leadership</h2>
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
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;