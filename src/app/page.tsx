import ImpactSection from '@/components/achievements/Achievements'
import CallToActionSection from '@/components/callToAction/CallToActionSection'
import Faq from '@/components/faq/Faq'
import Hero from '@/components/hero/Hero'
import DefaultLayout from '@/components/layout/DefaultLayout'
import MissionSection from '@/components/mission/Mission'
import TeamSection from '@/components/team/Team'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <DefaultLayout>
      <Hero/>
      <MissionSection/>
      <ImpactSection/>
      <TeamSection/>
      <Testimonials/>
      <Faq/>
      <CallToActionSection/>
      </DefaultLayout>
  )
}

export default Home