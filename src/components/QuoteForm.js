import React from 'react'
import Select from 'react-select'
import Input from './ui/Input'
import TextArea from './ui/TextArea'

const QuoteForm = () => {
  
  const servicesOpts = [
    { value: 'roof cleaning', label: 'Roof Cleaning' },
    { value: 'house washing', label: 'House Washing' },
    { value: 'pressure washing', label: 'Pressure Washing' },
    { value: 'commercial washing', label: 'Commercial Washing' },
    { value: 'industrial washing', label: 'Industrial Washing' },
  ]

  const marketingOpts = [
    { value: 'google search', label: 'Google Search' },
    { value: 'google ad', label: 'Google Ad' },
    { value: 'facebook ad', label: 'Facebook Ad' },
    { value: 'yard sign', label: 'Yard Sign' },
    { value: 'posted flyer', label: 'Posted Flyer' },
    { value: 'sticker', label: 'Sticker' },
    { value: 'customer referral', label: 'Customer Referral' },
    { value: 'customer referral', label: 'Post Card' },
  ]

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="free-quote" action="/contact-successful" className='flex flex-col gap-2 relative z-[25]' >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="free-quote" />
      
      <div className='w-full'>
        <fieldset>
          <legend className='text-lg font-medium mb-2'>Residential or Commercial?</legend>

          <div className='text-lg flex gap-2 items-center'>
            <input className='w-4 h-4 mb-1.5 checked:accent-storm' type='radio' name="residential_or_commercial" id='residential' required />
            <label htmlFor="residential">Residential</label>
          </div>
          <div className='text-lg flex gap-2 items-center'>
            <input className='w-4 h-4 mb-1.5 checked:accent-storm' type='radio' name="residential_or_commercial" id='commercial' required />
            <label htmlFor="commercial">Commercial</label>
          </div>
        </fieldset>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <p className="md:col-span-2 font-medium">Contact Details</p>
        <div>
          <Input name="contact_first_name" placeholder="First Name" required />
        </div>
        <div>
          <Input name="contact_last_name" placeholder="Last Name" required />
        </div>
        <div>
          <Input name="company_name" placeholder="Company Name (if applicable)" />
        </div>
        <div>
          <Input name="email" placeholder="Email" type="email" required />
        </div>
        <div>
          <Input name="phone_number" placeholder="Phone Number" type="tel" pattern="^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}$" required />
          <p className='pt-1.5 px-1 text-black/60 text-sm leading-4'>By providing your phone number, you agree to receive text messages (SMS). Message and data rates may apply. Message frequency varies.</p>
        </div>
      </div>
      <div className='w-full grid grid-cols-6 gap-1'>
        <p className="col-span-full font-medium">Address</p>
        <div className='col-span-full md:col-span-3'>
          <Input name="street1" placeholder="Street 1" required />
        </div>
        <div className='col-span-full md:col-span-3'>
          <Input name="street2" placeholder="Street 2" />
        </div>
        <div className='col-span-2'>
          <Input name="city" placeholder="City" required />
        </div>
        <div className='col-span-2'>
          <Input name="state" placeholder="State" pattern="[A-Za-z]+" required />
        </div>
        <div className='col-span-2'>
          <Input name="zip" placeholder="ZIP Code" required />
        </div>
      </div>
      <div className='w-full grid grid-cols-1 gap-1'>
        <p className="font-medium">Service Details</p>
        <div>
          <Select
            name="services_requested"
            options={servicesOpts}
            isMulti
            className="rounded-sm w-full text-black/75"
            placeholder="Services Needed? (Select All That Apply)"
            aria-label="Services Needed? (Select All That Apply)"
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
        <div>
          <Select
            name="marketing_source"
            options={marketingOpts}
            isMulti
            className="rounded-sm w-full text-black/75"
            placeholder="How did you hear about us?"
            aria-label="How did you hear about us?"
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
        <div>
          <TextArea name="leave_a_message" placeholder="Tell us a little about what you are looking to get done" />
        </div>
      </div>
      <button 
        className="leading-none mt-2 font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5"
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default QuoteForm