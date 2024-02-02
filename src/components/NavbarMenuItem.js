import React from 'react'
import { Link } from 'gatsby'

const NavbarMenuItem = ({ item }) => {
  return (
    <Link
        //to='#' 
        to={item.link}
        className='cursor-pointer w-full hover:text-storm lg:w-auto text-left after:block after:h-0.5 after:w-0 after:bg-storm after:transition-[width] after:duration-[.3s] hover:after:w-full'
        activeClassName='after:block after:h-0.5 after:w-full'
        partiallyActive={true}
    >
        {item.name}
    </Link>
  )
}

export default NavbarMenuItem