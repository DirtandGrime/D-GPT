import React from 'react'
import Page from '../layouts/Page'
import { TitleBanner } from '../components'
import { Container } from '../layouts'

import ReceiveDollar from "../images/receive_dollar.svg"
import Coins from "../images/coins.svg"
import SalePriceTag from "../images/sale_price_tag.svg"
import SalePriceCircle from "../images/sale_price_circle.svg"
import Input from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'

const RewardsAndReferrals = () => {
  return (
    <Page>
        <TitleBanner title="Rewards and Referrals" />

        <section>
          <Container>
            <div className="flex flex-col gap-16 items-center text-center md:text-start">
              <h3 className="text-4xl font-semibold text-center">
                Spread the word & we'll reward you!
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-x-20 max-w-screen-xl">
                <div className="flex flex-col gap-8">
                  <p className="text-2xl font-semibold -mb-4 text-center" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    For referring your friends...
                  </p>

                  <div className="bg-cement rounded-md shadow-lg shadow-storm/50 flex flex-col gap-4 p-8 max-w-screen-md" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <img src={ReceiveDollar} alt="Decorative Icon" />
                      <div className="text-3xl font-semibold">You get up to $500</div>
                    </div>
                    <p className="text-lg text-black/75">Fill out our referral form to let us know who you are, and who you're referring. If we close the job, we'll send you a referral fee between $50 and $500!</p>
                  </div>

                  <div className="bg-cement rounded-md shadow-lg shadow-storm/50 flex flex-col gap-4 p-8 max-w-screen-md" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <img src={SalePriceTag} alt="Decorative Icon" />
                      <div className="text-3xl font-semibold">They get 10% off our services</div>
                    </div>
                    <p className="text-lg text-black/75">Not only do you get a bonus, but the person you refer to us enjoys a 10% discount on any of our services. It pays to be friendly!</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="text-2xl font-semibold text-center -mb-4" data-sal="slide-down" data-sal-delay="500" data-sal-easing="ease-linear" data-sal-duration="500">
                    For referring your neighbors...
                  </p>

                  <div className="bg-sky/25 rounded-md shadow-lg shadow-storm/50 flex flex-col gap-4 p-8 max-w-screen-md" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <img src={Coins} alt="Decorative Icon" />
                      <div className="text-3xl font-semibold">You get 20% off per referral!</div>
                    </div>
                    <p className="text-lg text-black/75">For each neighbor that books our services on the same day or before yours, you’ll get 20% off if we close the deal. If you refer 5 or more neighbors, your service is 100% off!</p>
                  </div>

                  <div className="bg-sky/25 rounded-md shadow-lg shadow-storm/50 flex flex-col gap-4 p-8 max-w-screen-md" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <img src={SalePriceCircle} alt="Decorative Icon" />
                      <div className="text-3xl font-semibold">They get 10% off our services</div>
                    </div>
                    <p className="text-lg text-black/75">Each neighbor that we book through your referral gets a 10% discount on their service.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className='-mt-8'>
          <Container>
            <div className='max-w-screen-lg m-auto'>
              <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="referral-program" action="/contact-successful" >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="referral-program" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 rounded-md border border-dirt/75 relative m-auto max-w-screen-xl">
                  <div className="col-span-2 font-neato text-xl italic bg-clean static md:absolute -top-4 left-0 p-4 ml-2.5 md:py-0">
                    Who is making the referral?
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="contact_first_name" placeholder="First Name" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="contact_last_name" placeholder="Last Name" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="company_name" placeholder="Company Name (if applicable)" />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="email" placeholder="Email" type="email" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="phone_number" placeholder="Phone Number" type="tel" pattern="^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}$" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 mt-10 md:mt-16 rounded-md border border-dirt/75 relative m-auto max-w-screen-xl">
                  <div className="col-span-2 font-neato text-xl italic bg-clean static md:absolute -top-4 left-0 p-4 ml-2.5 md:py-0">
                    Who are you referring to us?
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="referral_first_name" placeholder="First Name" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="referral_last_name" placeholder="Last Name" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="referral_company_name" placeholder="Company Name (if applicable)" />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="referral_email" placeholder="Email" type="email" required />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <Input name="referral_phone_number" placeholder="Phone Number" type="tel" pattern="^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}$" required />
                  </div>
                  <div className='col-span-2 h-32'>
                    <TextArea name="leave_a_message" placeholder="Tell us a little about what you are looking to get done" />
                  </div>
                  <div className='w-fit mt-4'>
                    <button
                      className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5"
                      type='submit'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </section>
    </Page>
  )
}

export const Head = () => (
  <>
    <title>Save with Our Referral Program | Dirt and Grime, Co.</title>
    <meta name="description" content="Refer Dirt and Grime, Co. to your friends and neighbors and save on your next service. Learn more about our referral program and how you can make your pressure washing service even more affordable." />
  </>
)

export default RewardsAndReferrals