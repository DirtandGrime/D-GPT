import React from 'react'
import { graphql } from "gatsby"
import Page from '../layouts/Page'
import { FooterCTA, TitleBanner, ValuesSection } from '../components'
import { Container } from '../layouts'

const ServiceAreas = ({ data }) => {
  const services = data.allMdx.nodes
  console.log(services)

  return (
    <Page>
        <TitleBanner title="Exterior Cleaning Services in Alabama" />

        <section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {services.map((service) => (
                <div className='flex flex-col gap-4 items-center'>
                  <h2 className="font-semibold text-3xl text-center border-b-2 border-b-black/20 pb-4" data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease-linear" data-sal-duration="500" key={service.frontmatter.name}>
                    {service.frontmatter.name} in Alabama
                  </h2>
                  <div className="text-storm inline-grid grid-cols-2 md:grid-cols-3 gap-3 gap-x-6 text-xl">
                    {service.frontmatter.locations.map((location) => (
                      <div key={service.frontmatter.name + location.name} data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease-linear" data-sal-duration="500">
                        {location.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ValuesSection />

        <FooterCTA />
        
    </Page>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {internal: {contentFilePath: {regex: "/service/"}}}) {
      nodes {
        frontmatter {
          locations {
            name
          }
          name
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <title>Our Service Areas - Dirt and Grime, Co. Pressure Washing Services</title>
    <meta name="description" content="See the full list of Birmingham, Alabama suburbs we serve with our top-notch pressure washing and exterior cleaning services. We're proud to keep our community clean." />
  </>
)

export default ServiceAreas