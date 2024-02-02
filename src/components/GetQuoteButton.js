import { Link } from 'gatsby'
import React from 'react'

const GetQuoteButton = ({ text, secondary, outline }) => {
  return (
    <Link to='/get-a-quote'>
      <button
        className={`leading-none font-greycliff font-semibold px-6 pb-3.5 pt-4 bg-mud text-2xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5 relative z-20 ${secondary ? 'bg-storm' : ''} ${outline ? 'bg-transparent border-2 border-clean' : ''}`}
      >
        {text ? text : 'Get a Quote'}
      </button>
    </Link>
  )
}

export default GetQuoteButton