import React from 'react'
import BannerSection from '../components/BannerSection'
import Addmore from '../components/Addmore'
import Pricing from '../components/Pricing'
import CompanyStats from '../components/CompanyStats'
import PartnersSection from '../components/PartnersSection'

const Home = () => {
  return (
    <>
      <BannerSection />
      <Addmore />
      <Pricing />
      <PartnersSection />
      <CompanyStats />
    </>
  )
}

export default Home