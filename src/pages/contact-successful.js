import React from 'react'
import Page from '../layouts/Page'
import { TitleBanner } from '../components'
import { Container } from '../layouts'

const ContactSuccessful = () => {
  return (
    <Page>

        <TitleBanner title="Thank you!" />

        <section className='self-center m-auto py-32'>
            <Container>
                <div className="h-full max-w-lg m-auto flex flex-col justify-center">
                    <h1 className='text-3xl font-neato text-center leading-10'>Your message has been received! We'll be in touch ASAP.</h1>
                </div>
            </Container>
        </section>

    </Page>
  )
}

export default ContactSuccessful