import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={className}>
      <div className='max-w-screen-2xl m-auto h-full px-4 md:px-6'>
        {children}
      </div>
    </div>
  )
}

export default Container