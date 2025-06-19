import ImpactSection from '@/components/achievements/Achievements'
import CallToActionSection from '@/components/callToAction/CallToActionSection'
import Hero from '@/components/hero/Hero'
import DefaultLayout from '@/components/layout/DefaultLayout'
import MissionSection from '@/components/mission/Mission'
import TeamSection from '@/components/team/Team'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <DefaultLayout>
    <div className=''>
      <Hero/>
      <MissionSection/>
      <TeamSection/>
      <ImpactSection/>
      <Testimonials/>
      <CallToActionSection/>
    </div>
      </DefaultLayout>
  )
}

export default Home