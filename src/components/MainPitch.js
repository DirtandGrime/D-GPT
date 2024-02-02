import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import { Container } from "../layouts"
import { GetQuoteButton, MajorHeading } from "../components"
import { BiCaretRight } from '@react-icons/all-files/bi/BiCaretRight'
import { services } from '../../data/services'

const MainPitch = () => {

  return (
    <section className="bg-cement">
        <Container>
            <div className="flex flex-col gap-6 relative">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <MajorHeading largeText="Let us take care of the cleaning so you can focus on what matters!" smallText="Birmingham's #1 Exterior Cleaning Service" />
                    <p className="text-black/70 font-medium leading-relaxed" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease-linear" data-sal-duration="500">
                        Cleaning your home is time-consuming and physically demanding. Our expert pressure washing team in Birmingham, AL is here to take the hassle out of cleaning your home’s exterior. With our top-of-the-line equipment and safe cleaning solutions, we can get your home looking like new in no time.
                    </p>
                </div>
            
                <div className="mt-4 w-full grid grid-cols-1 md:p-4 md:flex md:flex-wrap md:gap-16 md:gap-y-6 text-2xl">
                    {services.map((service) => (
                        <Link key={service.name} to={service.link} className="flex items-center justify-between md:justify-center gap-3 cursor-pointer md:hover:-translate-y-0.5 relative z-40 p-3 px-4 mt-1 rounded-sm bg-mud text-clean shadow-lg shadow-storm/50" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="250">
                            {service.name} 
                            <div className="md:p-0.5 rounded-full flex bg-clean text-mud">
                                <BiCaretRight className="inline" fontSize={16} />
                            </div>
                        </Link>
                    ))}
                    <div className='absolute -bottom-20 lg:-bottom-28 z-10 left-[35%] object-fill opacity-50'>
                        <StaticImage
                            src="../images/dirt.png"
                            alt=""
                            width={350}
                        />
                    </div>
                </div>
                <div className="mt-2 self-center" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <GetQuoteButton text="Get A Free Quote" secondary={true} />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MainPitch