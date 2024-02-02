import React from 'react'
import Page from '../layouts/Page'
import { Container } from '../layouts'
import { TitleBanner } from '../components'
import { graphql } from "gatsby"
import AccordianFaq from '../components/ui/AccordianFaq'

const FAQPage = ({ data }) => {
  let FAQs = []
  let FAQGroups = []
  data.allMdx.nodes.forEach(node => {
    console.log(node.frontmatter.FAQs)
    if (node.frontmatter.FAQs) {
        FAQs.push(node.frontmatter.FAQs)
        FAQGroups.push(node.frontmatter.name)
    }
  })

  console.log(FAQs)

  return (
    <Page>
        <TitleBanner title="Frequently Asked Questions" />
        
        <section className='bg-clean/25'>
            <Container>
                {FAQs.map((FAQset, index) => (
                    <>
                        <h2 className="font-neato text-3xl mt-12 mb-4">{FAQGroups[index]}</h2>
                        <AccordianFaq data={FAQset}  />
                    </>
                ))}
            </Container>
        </section>

    </Page>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          FAQs {
            answer
            question
          }
          name
        }
      }
    }
  }
`

export const Head = () => (
    <>
        <title>Frequently Asked | Dirt and Grime, Co.</title>
        <meta name="description" content="Dirt and Grime, Co. is here to answer all of your questions. We want our customers to be fully aware of the process to they know exactly what to expect." />
    </>
)

export default FAQPage