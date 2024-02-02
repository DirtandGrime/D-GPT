import React from 'react'
import { Container } from '../layouts'

const Testimonials = () => {
  return (
    <section>
      <Container>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[url('../images/sprayer.png')] opacity-60"></div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-2 lg:w-[500px]">
            <span className="font-neato text-4xl md:text-5xl md:!leading-[1.1] ">Hear from our satisfied customers</span>
            <span>Read real reviews from our happy customers in Birmingham</span>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg self-end" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
              <span className="text-2xl font-semibold">"Top-Notch Pressure Washing"</span>
              <p className="text-black/90">Dirt and Grime, Co is the real deal! Their services are fast, efficient, and effective. I was blown away by the results and would recommend them to anyone looking for top-notch pressure washing services.</p>
              <span className="font-semibold">- James Penny</span>
            </div>
            <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
              <span className="text-2xl font-semibold">"Top-Notch Pressure Washing"</span>
              <p className="text-black/90">Dirt and Grime, Co is the real deal! Their services are fast, efficient, and effective. I was blown away by the results and would recommend them to anyone looking for top-notch pressure washing services.</p>
              <span className="font-semibold">- James Penny</span>
            </div>
            <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg self-end" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
              <span className="text-2xl font-semibold">"Top-Notch Pressure Washing"</span>
              <p className="text-black/90">Dirt and Grime, Co is the real deal! Their services are fast, efficient, and effective. I was blown away by the results and would recommend them to anyone looking for top-notch pressure washing services.</p>
              <span className="font-semibold">- James Penny</span>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Testimonials