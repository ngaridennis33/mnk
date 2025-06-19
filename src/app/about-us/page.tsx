import React from 'react'
import CompanyOverview from '@/components/companyOverview/CompanyOverview'
import Faq from '@/components/faq/Faq'
import { Metadata } from 'next'
import DefaultLayout from '@/components/layout/DefaultLayout'
import AboutHero from '@/components/hero/AboutHero'

export const metadata: Metadata = {
  title: "About"
}

const page = () => {
  return (
    <DefaultLayout>
      <AboutHero/>
      <CompanyOverview/>
      <Faq/>
    </DefaultLayout>
  )
}

export default page