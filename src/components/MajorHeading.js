import React from 'react'

const MajorHeading = ({ largeText, smallText }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="font-neato text-storm text-2xl" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
          {smallText}
        </h2>
        <h3 className="font-greycliff text-black text-5xl md:text-6xl md:tracking-tight md:!leading-[1.1]">
          {largeText}
        </h3>
    </div>
  )
}

export default MajorHeading