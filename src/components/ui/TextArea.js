import React from 'react'

const TextArea = ({ name, placeholder }) => {
  return (
    <textarea
        type="text"
        name={name}
        className="rounded-[3px] w-full h-full text-black/80 py-[7px] px-3 border-[1px] border-sky/90  focus-visible:outline-sky focus-visible:ring-sky"
        placeholder={placeholder}
        aira-label={placeholder}
    />
  )
}

export default TextArea