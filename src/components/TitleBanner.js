import React from 'react'
import { Container } from '../layouts'

const TitleBanner = ({ title }) => {
  return (
    <section className='bg-cement'>
        <Container>
          <h1 className='font-neato text-5xl text-center' data-sal="slide-down" data-sal-delay="0" data-sal-easing="ease-linear" data-sal-duration="500">{title}</h1>
        </Container>
      </section>
  )
}

export default TitleBanner