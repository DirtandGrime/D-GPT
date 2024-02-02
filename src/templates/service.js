import React from 'react'
import { graphql } from "gatsby"
import Page from '../layouts/Page'
import { Container } from '../layouts'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { FooterCTA, GetQuoteButton, MajorHeading, QuoteForm, ValuesSection } from '../components'
import HeroVideo from "../images/MaxHeroLodge.mp4"
import AccordianFaq from '../components/ui/AccordianFaq'

const Service = ({ data }) => {
  const service = data.mdx.frontmatter
  const mainImage = getImage(service.image)

  // const beforeImage1 = getImage(service.before_after_images[0].url_before)
  // const afterImage1 = getImage(service.before_after_images[0].url_after)
  // const beforeImage2 = getImage(service.before_after_images[1].url_before)
  // const afterImage2 = getImage(service.before_after_images[1].url_after)
  // const beforeImage3 = getImage(service.before_after_images[2].url_before)
  // const afterImage3 = getImage(service.before_after_images[2].url_after)

  return (
    <Page>
      <section className="py-0">
          <div className="relative min-h-[450px]">
              <div className='w-full h-full absolute top-0 left-0 z-0'>
                <video 
                  playsInline
                  autoPlay
                  muted
                  loop
                  className='w-full h-full object-cover'
                >
                  <source src={HeroVideo} type='video/mp4'/>
                </video>
              </div>
              <div className="bg-black/60 relative z-10 py-8 min-h-[450px]">
                  <Container className="h-full">
                      <div className="h-full flex flex-col gap-6 lg:flex-row justify-center items-center min-h-[450px]">
                        <h1 className="font-neato text-6xl leading-tight text-clean italic text-center lg:text-start max-w-2xl" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                          {service.title}
                        </h1>
                        <div className="bg-clean/80 rounded-md flex-col gap-6 p-6 items-center shadow-md hidden lg:flex max-w-2xl" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="800">
                          <span className="font-neato text-4xl italic">Book a free quote!</span>
                          <QuoteForm />
                        </div>
                        <div className="lg:hidden">
                          <GetQuoteButton />
                        </div>
                      </div>
                  </Container>
              </div>
          </div>
      </section>

      <section className='bg-gradient-to-b from-cement via-cement to-clean'>
        <Container>
          <div className='flex flex-col items-center lg:items-start relative'>
            <div className="flex flex-col gap-4 p-8 bg-clean rounded-md shadow-md max-w-screen-md overflow-hidden relative z-10">
              <MajorHeading largeText={service.offer_title} smallText={service.offer_sub_title} />
              <p className="text-black/75">{service.offer_description}</p>
              <div data-sal="flip-up" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                <GetQuoteButton text="Get A Free Quote" />
              </div>
            </div>
            <div className='hidden lg:block absolute top-[175px] left-[675px] z-0 rounded-lg overflow-hidden opacity-25 shadow-lg'>
              <StaticImage
                src='../images/Rectangle.jpg'
                alt=''
              />
            </div>
            <div className="hidden lg:block absolute border-[6px] border-sky z-0 top-[32px] right-0 xl:left-[900px] max-w-[400px] xl:max-w-none rounded-lg overflow-hidden shadow-lg">
              <GatsbyImage
                image={mainImage}
                alt='Main Image'
                className='w-full'
              />
            </div>
            <div className='absolute top-[260px] z-0 left-[260px] rotate-90 object-fill opacity-50'>
              <StaticImage
              src="../images/dirt.png"
              alt=""
              width={450}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-clean 2xl:pt-8'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-1'>
            <div className='lg:hidden max-h-[800px] border-[6px] border-sky rounded-lg overflow-hidden shadow-lg'>
              <GatsbyImage
                image={mainImage}
                alt='Main Image'
                className='w-full h-full'
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 md:order-first">
              <div className="flex flex-col gap-8">
                {service.sub_services.map((service, index) => (
                  <>
                   {index % 2 === 0 && (
                    <div className="flex flex-col gap-3"  data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-in-cubic" data-sal-duration="400">
                      <h2 className="text-3xl font-neato italic">
                        {service.name}
                      </h2>
                      <p className="text-black/75">
                        {service.description}
                      </p>
                    </div>
                   )}
                  </>
                ))}
              </div>
              <div className="flex flex-col gap-8 lg:mt-8 xl:mt-40">
                {service.sub_services.map((service, index) => (
                  <>
                    {index % 2 === 1 && (
                      <div className="flex flex-col gap-3" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-in-cubic" data-sal-duration="400">
                        <h2 className="text-3xl font-neato italic">
                          {service.name}
                        </h2>
                        <p className="text-black/75">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-cement'>
        <Container>
          <div className='flex gap-16 items-center'>
            <div className="flex flex-col gap-8">
              <MajorHeading largeText={service.benefit_title} smallText={service.benefit_sub_title} />
              <p className="text-black/75 lg:hidden max-w-2xl" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease-linear" data-sal-duration="500" >{service.benefit_description}</p>
              <div>
                <GetQuoteButton text="Get A Free Quote" />
              </div>
            </div>
            <div className="hidden lg:inline-block">
              <p className="text-black/75 max-w-2xl" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease-linear" data-sal-duration="500">{service.benefit_description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* <BeforeAfterSliders
        before1={beforeImage1}
        after1={afterImage1}
        before2={beforeImage2}
        after2={afterImage2}
        before3={beforeImage3}
        after3={afterImage3}
      /> */}

      <section className='bg-cement'>
        <Container>
          <div className="flex flex-col gap-8">
            <h3 className="font-neato text-4xl">Frequently Asked {service.name} Questions</h3>
            <AccordianFaq data={service.FAQs}  />
          </div>
        </Container>
      </section>

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
                {service.testimonials.map((testament, index) => (
                  <>
                    <div key={testament.name} className={`bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg ${index % 2 === 0 ? '' : 'self-end'}`} data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                      <span className="text-2xl font-semibold">&quot;{testament.title}&quot;</span>
                      <p className="text-black/90">{testament.quote}</p>
                      <span className="font-semibold">- {testament.name}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ValuesSection />

      <FooterCTA />

    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        title
        meta_title
        meta_description
        image {
          childImageSharp {
            gatsbyImageData(width: 500, height: 600)
          }
        }
        offer_title
        offer_sub_title
        offer_description
        sub_services {
          name
          description
        }
        benefit_title
        benefit_sub_title
        benefit_description
        before_after_images {
          url_before {
            childImageSharp {
              gatsbyImageData
            }
          }
          url_after {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        FAQs {
          question
          answer
        }
        testimonials {
          title
          name
          quote
        }
      }
    }
  }
`

export const Head = ({ data }) => (
  <>
    <title>{data.mdx.frontmatter.meta_title}</title>
    <meta name="description" content={data.mdx.frontmatter.meta_description} />

    <meta property="og:title" content={data.mdx.frontmatter.meta_title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.dirtandgrime.co/" />
    {/* <meta property="og:image" content="../images/logos/logo_navbar.jpg" /> */}
    <meta property="og:description" content={data.mdx.frontmatter.meta_description} />
  </>
)

export default Service
