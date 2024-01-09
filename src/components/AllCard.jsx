import React from 'react'
import Stats from './Stats'
import Bussiness from './Bussiness'
import Billing from './Billing'
import CardDeal from './CardDeal'
import Testimonial from './Testimonial'
import Clients from './Clients'
import CTA from './CTA'

const AllCard = () => {
  return (
    <>
      <div className="bg-[#00040F] flex justify-center items-start sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full text-white">
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
        </div>
      </div>
    </>
  )
}

export default AllCard