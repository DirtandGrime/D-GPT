import React from 'react'
import Page from '../layouts/Page'
import { Container } from '../layouts'
import { FooterCTA, TitleBanner, ValuesSection } from '../components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const AboutUs = ({ data }) => {
  const aboutUsData = data.allMdx.nodes[0].frontmatter
  const image_vertical = getImage(aboutUsData.our_story_image_vertical)
  console.log(aboutUsData)
  const image_horizontal = getImage(aboutUsData.our_story_image_horizontal)

  return (
    <Page>
      <TitleBanner title={aboutUsData.page_title} />

      <section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="hidden lg:block rounded-md shadow-lg overflow-hidden shadow-storm" data-sal="slide-down" data-sal-delay="250" data-sal-easing="ease-linear" data-sal-duration="500">
              <GatsbyImage
                image={image_vertical}
                alt={aboutUsData.our_story_image_vertical_alt}
                className='h-full'
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-12 items-center">
              <h2 className="font-neato text-4xl w-full text-center" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">{aboutUsData.our_story_title}</h2>
              <p data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">{aboutUsData.our_story_description_top}</p>
              <div className='rounded-md shadow-lg overflow-hidden shadow-storm' data-sal="slide-down" data-sal-delay="250" data-sal-easing="ease-linear" data-sal-duration="500">
                <GatsbyImage 
                  image={image_horizontal}
                  alt={aboutUsData.our_story_image_horizontal_alt}
                />
              </div>
              <p data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">{aboutUsData.our_story_description_bottom}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className='-mt-4'>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutUsData.our_values.map((value) => (
              <div className="flex flex-col gap-4 items-center bg-cement rounded-md shadow-md shadow-storm/50 p-6" key={value.title} data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                <div className="font-semibold text-3xl text-center">{value.title}</div>
                <p className="text-black/75">{value.text}</p>
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
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/data/about-company.mdx/"}}}
    ) {
      nodes {
        frontmatter {
          meta_title
          meta_description
          page_title
          our_story_description_bottom
          our_story_description_top
          our_story_title
          our_story_image_horizontal {
            childImageSharp {
              gatsbyImageData(width: 800, aspectRatio: 1.7)
            }
          }
          our_story_image_horizontal_alt
          our_story_image_vertical {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          our_story_image_vertical_alt
          our_values {
            title
            text
          }
        }
      }
    }
  }
`

export default AboutUs

export const Head = ({ data }) => (
  <>
    <title>{data.allMdx.nodes[0].frontmatter.meta_title}</title>
    <meta name="description" content={data.allMdx.nodes[0].frontmatter.meta_description} />
  </>
)