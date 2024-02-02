import React from 'react'
import { Container } from '../layouts'
import GetQuoteButton from './GetQuoteButton'
import { StaticImage } from 'gatsby-plugin-image'

const FooterCTA = () => {
  return (
    <section className="relative">
        <div className="absolute w-full h-full top-0 left-0 -z-10 overflow-hidden">
            <StaticImage 
                src='../images/wall.png'
                alt='Decorative wall'
                layout='fullWidth'
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-clean/95 backdrop-blur-[1.5px] backdrop-brightness-100 -z-10"></div>
        <Container>
            <div className="flex flex-col gap-6 items-center">
                <div className="font-greycliff font-semibold text-5xl text-center">Ready to make your house shine?</div>
                <div data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <GetQuoteButton text="Get A Free Quote" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default FooterCTA