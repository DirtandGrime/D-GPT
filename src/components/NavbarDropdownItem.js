import React from 'react'
import { NavbarMenuItem } from '../components'
import { BiCaretDown } from '@react-icons/all-files/bi/BiCaretDown'

const NavbarDropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [delayHandler, setDelayHandler] = React.useState(null)

  const handleMouseEnter = event => {
    clearTimeout(delayHandler)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setDelayHandler(setTimeout(() => {
      setIsOpen(false)
    }, 300))
  }

  return (
    <div className='flex flex-col gap-1 relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') { // added support for keyboard interactivity
              setIsOpen(!isOpen)
        }
      }}
    >
      <div className='cursor-pointer'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full text-left'
        >
          {item.name}
          <BiCaretDown className='inline ml-1' />
        </button>
      </div>
      {isOpen && (
        <div className="p-3 rounded bg-sky bg-opacity-75 flex flex-col gap-5 lg:mt-9 lg:absolute lg:top-0 lg:left-0 whitespace-nowrap">
          {item.dropdownItems.map(item => (
            <NavbarMenuItem key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NavbarDropdownItem
