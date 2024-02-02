import React from 'react'
import { Container } from '../layouts'
import QuoteIcon from "../images/quote.svg"
import ReasonableIcon from "../images/sale.svg"
import LicenseIcon from "../images/Licensed.svg"
import SatisfactionIcon from "../images/check.svg"
import WarrantyIcon from "../images/shield.svg"
import { StaticImage } from 'gatsby-plugin-image'

const ValuesSection = () => {
  return (
    <section className="relative">
      <div className="absolute h-full top-0 left-0 lg:left-36 -z-10">
        <StaticImage 
          src='../images/texture_dark.png'
          alt='Decorative texture'
          
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-cement/50 backdrop-brightness-100 -z-10"></div>
      <Container>
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-8 font-neato text-6xl text-center">
              <div>Excellence.</div>
              <div>People First.</div>
              <div>Cleanliness.</div>
            </div>
            <div className="flex flex-wrap justify-evenly gap-4 italic font-bold text-2xl w-full">
              <div className="flex gap-1 items-center justify-center">
                <img src={QuoteIcon} alt="decorative" />
                <div>Free Quotes</div>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img src={ReasonableIcon} alt="decorative" />
                <div>Reasonable Prices</div>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img src={LicenseIcon} alt="decorative" />
                <div>Licensed & Insured</div>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img src={SatisfactionIcon} alt="decorative" />
                <div>100% Satisfaction</div>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img src={WarrantyIcon} alt="decorative" />
                <div>Warrantied Service</div>
              </div>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default ValuesSection