import React from 'react'
import Page from '../layouts/Page'
import { TitleBanner } from '../components'
import { Container } from '../layouts'
import Input from '../components/ui/Input'
import Select from 'react-select'

const apply = () => {
  const partFullOpts = [
    { value: 'part_time', label: 'Part Time' },
    { value: 'full_time', label: 'Full Time' },
  ]

  return (
    <Page>
        <TitleBanner title="We're looking to hire" />

        <section>
          <Container>
            <form method="post" enctype="multipart/form-data" netlify-honeypot="bot-field" data-netlify="true" name="online-application" action="/contact-successful">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="online-application" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 rounded-md border border-dirt/75 relative m-auto max-w-screen-xl">
                <div className="col-span-2 font-neato text-xl italic bg-clean static md:absolute -top-4 left-0 p-4 ml-2.5 md:py-0">
                  Apply online to become a part of our team
                </div>
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2' data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                  <div className="col-span-2 mt-4">
                    <Input name="full_name" placeholder="Full Name" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Input name="birthday" placeholder="Date of Birth" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Input name="email" placeholder="Email Address" type='Email' required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Input name="phone_number" placeholder="Phone Number" type='tel' pattern="^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}$" required />
                  </div>
                  <Select
                    required
                    name="part_full_time"
                    options={partFullOpts}
                    className="rounded-sm w-full text-black/75 col-span-2 md:col-span-1"
                    placeholder="Part Time / Full Time"
                    aria-label="Part Time / Full Time"
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary25: '#8B9C9E25',
                        primary: '#8B9C9E',
                        neutral20: '#8B9C9E90',
                      },
                    })}
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2 mt-4" data-sal="slide-down" data-sal-delay="125" data-sal-easing="ease-linear" data-sal-duration="500">
                  <label className='font-greycliff font-semibold text-xl' htmlFor="resume_file">Resume Upload (PDF or Word)</label>
                  <input type="file" id="resume_file" name='resume_file' accept=".doc,.docx,.pdf" required />
                </div>
                <div className="mt-5" data-sal="slide-down" data-sal-delay="350" data-sal-easing="ease-linear" data-sal-duration="500">
                  <button
                    className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5"
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </section>
    </Page>
  )
}

export const Head = () => (
  <>
    <title>Join Our Team | Pressure Washing Careers at Dirt and Grime, Co.</title>
    <meta name="description" content="Interested in a rewarding career in pressure washing and exterior cleaning? Join our team of professionals and contribute to keeping Birmingham's properties sparkling clean." />
  </>
)

export default apply