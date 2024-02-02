import React from 'react'

const Input = ({ name, placeholder, type = "text", required = false, pattern = '.*' }) => {
  return (
    <input 
        type={type} 
        name={name}
        className="rounded-[3px] w-full text-black/75 py-[7px] px-3 border-[1px] border-sky/90  focus-visible:outline-sky focus-visible:ring-sky"
        placeholder={placeholder}
        aira-label={placeholder}
        required={required}
        pattern={pattern}
    />
  )
}

export default Input