import React from 'react'
import { NavbarMenuItem, NavbarDropdownItem } from '../components'
import { Link } from 'gatsby'

const NavbarMenu = ({ className }) => {

  const menuItems = [
    {
        name: 'Services',
        dropdownItems: [
            {
                name: 'House Washing',
                link: '/house-washing-in-birmingham'
            },
            {
                name: 'Pressure Washing',
                link: '/pressure-washing-in-birmingham'
            },
            {
                name: 'Roof Cleaning',
                link: '/roof-cleaning-in-birmingham'
            },
            {
                name: 'Commercial Washing',
                link: '/commercial-washing-in-birmingham'
            },
            {
                name: 'Industrial Washing',
                link: '/industrial-washing-in-birmingham'
            },
        ]
    },
    {
        name: 'Service Areas',
        link: '/exterior-cleaning-locations'
    },
    {
        name: 'Referral Program',
        link: '/rewards-and-referrals'
    },
    {
        name: 'Jobs',
        link: '/apply'
    },
    {
        name: 'FAQs',
        link: '/frequently-asked-questions'
    },
    {
        name: 'About Us',
        link: '/about-dirt-and-grime-co'
    },
  ]
    
  return (
    <div 
        className={`bg-clean/75 lg:bg-transparent text-black lg:text-current rounded-md p-4 flex gap-10 font-greycliff font-medium text-lg ${className}`}
        role="menu"
        aria-labelledby='options-menu'
    >
        {menuItems.map((item) => (
            <div key={item.name}>
                {item.dropdownItems && item.dropdownItems.length > 0 ? (
                    <NavbarDropdownItem item={item} role='menuitem' />
                ): (
                    <NavbarMenuItem item={item} role='menuitem'/>
                )}
            </div>
        ))}
        <div className="lg:hidden">
            <Link to="/get-a-quote">
                <button
                    className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5 relative z-20"
                >
                    Get a Quote
                </button>
            </Link>
        </div>
    </div>
  )
}

export default NavbarMenu