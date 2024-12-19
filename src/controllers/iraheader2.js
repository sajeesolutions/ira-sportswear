'use client'
import IRA_Logo from '../assests/IRA Logos.png';

import sub_cricket from '../assests/cricket202102.png';
import sub_tennis from '../assests/tennis.png';
import sub_badminton from '../assests/badminton.png';
import sub_pickelball from '../assests/pickelball.png';
import sub_scorrer from '../assests/scorrer.png';

import solutions_ds from '../assests/solutions/digitalsolutions.jpg';
import solutions_fg from '../assests/solutions/fangear.jpg';
import solutions_sg from '../assests/solutions/singage.jpg';

import bulk_mlc from '../assests/bulk_orders/mlc.jpg';
import bulk_ac from '../assests/bulk_orders/academies.jpg';
import bulk_tour from '../assests/bulk_orders/tournaments.jpg';
import bulk_fang from '../assests/bulk_orders/fangear.jpg';


import { Fragment, useState , useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'SPORTS',
      name: 'Sports',
      sections: [
        {
          id: 'badminton',
          name: 'Badminton',
          image : sub_badminton,
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
            { name: 'Jackets', href: '#' },
          ],
        },
        {
          id: 'tennis',
          name: 'Tennis',
          image : sub_tennis,
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'pickleball',
          name: 'Pickle Ball',
          image : sub_pickelball,
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'soccer',
          name: 'soccer',
          image : sub_scorrer,
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'cricket',
          name: 'Cricket',
          image : sub_cricket,
          items: [
            { name: 'Cricket Jerseys', href: '#' },
            { name: 'Cricket Pants', href: '#' },
            { name: 'Cricket Whites', href: '#' },
            { name: 'Training Wear', href: '#' },
          ],
        },
        {
          id: 'othersports',
          name: 'Other Sports',
        
          items: [
            { name: 'Volley Ball', href: '#' },
            { name: 'Running & Marathon', href: '#' },
            { name: 'Table Tennis', href: '#' },
            { name: 'Travel Needs', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Corporatewear',
      name: 'Corporate Wear',
      sections: [
        {
          id: '',
          name: '',
          image : '',
          items: [
            { name: '', href: '#' },
            
          ],
        },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
     /* featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'iraimages',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],*/
      sections: [
        {
          id: 'digitalsolutions',
          name: 'Digital Solutions',
          image: solutions_ds,
          items: [
            { name: 'Logo Design', href: '#' },
            { name: 'Shopify integration', href: '#' },
          ],
        },
        {
          id: 'signage',
          name: 'Signage',
          image: solutions_sg,
          items: [
            { name: 'Vinyl Banners', href: '#' },
            { name: 'Fabric Banners', href: '#' },
            { name: 'Posters', href: '#' },
          ],
        },
        {
          id: 'fangear',
          name: 'Fan Gear',
          image: solutions_fg,
          items: [
            { name: 'Game Day Essentials', href: '#' },
            { name: 'Supporter Items', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'BulkOrders',
      name: 'Bulk Orders',
     /* featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: '',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],*/
      sections: [
        {
          id: 'Leagues',
          name: 'Leagues',
          image: bulk_mlc,
          items: [
            { name: 'AMLCA', href: '#' },
            { name: 'MLC Major League..', href: '#' },
            { name: 'Shorts', href: '#' },
            { name: '+ More', href: '#' },
          ],
        },
        {
          id: 'Academies',
          name: 'Academies',
          image: bulk_ac,
          items: [
            { name: 'CCA Core Cricket..', href: '#' },
            { name: 'Blazers Cricket Ac..', href: '#' },
            { name: '+ More', href: '#' },
          ],
        },
        {
          id: 'Tournaments',
          name: 'Tournaments',
          image: bulk_tour,
          items: [
            { name: 'Atlanda Open 2024', href: '#' },
            { name: 'Spring Series 2024', href: '#' },
            { name: 'Spring Kings Kno..', href: '#' },
            { name: '+ More', href: '#' },
          ],
        },
        {
          id: 'fangear',
          name: 'Fan Gear',
          image: bulk_fang,
          items: [
            { name: 'Game Day Essentials', href: '#' },
            { name: 'Supporter Items', href: '#' },
            
          ],
        },
      ],
    },
  ],
  pages2: [
    { name: 'How It Works', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false)
  
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const handleMouseEnter = (categoryName) => {
    setOpenMenus((prev) => ({ ...prev, [categoryName]: true }));
  };

  const handleMouseLeave = (categoryName) => {
    setOpenMenus((prev) => ({ ...prev, [categoryName]: false }));
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 laptop:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

          

            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-bold text-gray-900 data-[selected]:text-iraprimaryb"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                     
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-bold text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages2.map((page2) => (
                <div key={page2.name} className="flow-root">
                  <a href={page2.href} className="-m-2 block p-2 font-semibold text-gray-900">
                    {page2.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-semibold text-gray-900">
                  Sign in
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-unnitedstates.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-semibold text-gray-900">USD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
          <div className="bg-iraprimaryb text-white">
            <div className="container mx-auto font-iraplayfair flex justify-between items-center px-4 py-2">
              <div className='text-sm font-body'>
                Contact Our Customer Support for any Questions or Concerns +1 847 624 2660
              </div>
              <div className="flex text-sm space-x-4">
              <a
                  href="#"
                  className="hover:text-gray-300 font-body transition"
                >
                  Size Guide
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                >
                  FAQ
                </a>
              
              </div>
            </div>
          </div>
        <nav aria-label="Top" className="mx-auto items-end max-w-full px-4 sm:px-6 lg:px-8 content-center">
          <div className="border-b mx-auto border-gray-200">
            <div className="flex h-36 items-baseline">

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 laptop:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="mt-16 mb-16 mx-auto relative h-8">
                <a href="#">
                  <span className="sr-only">IRA Sportswear</span>
                  <img
                    alt=""
                    src={IRA_Logo}
                    className="h-24 mt-22 mb-22 ml-0 w-auto laptop:-mt-10" 
                    />
                </a>
              </div>

              
              <div className="hidden laptop:flex mx-auto h-28 m-2 mt-6 p-0 gap-x-8 gap-y-10 font-title items-center">
                {/* Flyout menus */}
              <PopoverGroup className="lg:ml-20 lg:block lg:self-stretch" >
                <div className="flex h-full items-center space-x-6">
               
                {navigation.categories.map((category) => (
                  <Popover className="flex" key={category.name} onMouseEnter={() => handleMouseEnter(category.name)} >
                    <div className="relative flex">
                      {/* Popover Button */}
                      <PopoverButton key={category.name}
                        onMouseEnter={() => handleMouseEnter(category.name)}
                        className="relative focus:outline-none text-xl z-10 -mb-px flex items-center border-spacing-10 border-b-2 border-transparent pt-px text-gray-800 hover:text-gray-900 data-[open]:border-iraprimary data-[open]:text-iraprimaryb"
                      >
                        {category.name}
                      </PopoverButton>
                    </div>

                    {/* Popover Panel */}
                    {openMenus[category.name] &&  (
                      <PopoverPanel
                      onMouseEnter={() => handleMouseEnter(category.name)} // Keeps the menu open when hovering
                      onMouseLeave={() => handleMouseLeave(category.name)} // Hides the menu when mouse leaves
                      className="absolute z-50 inset-x-0 rounded-bl-3xl rounded-br-lg shadow-lg top-full text-sm text-gray-800 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                      <div aria-hidden="true" className="absolute inset-0 top-1/2" />
                        <div className="relative bg-white shadow-gray-200 shadow-md rounded-bl-2xl rounded-br-2xl">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-6">
                              <div className="row-start-0 text-justify grid grid-cols-6 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-semibold font-title text-left border-b-1 text-gray-900"
                                    >
                                      {section.name.toUpperCase()}
                                    </p>
                                    <p>
                                     
                                    {section.image ? (
                                        <img
                                          src={section.image}
                                          alt=""
                                          className="object-center mt-2.5 opacity-75"
                                          style={{ width: 202, height: 102 }}
                                        />
                                      ) : (
                                        <p className='mt-2.5 border-b-2'></p>
                                      )}

                                      
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 font-title sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800 font-title"
                                            style={{ fontSize: 16 }}
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    )}
                  </Popover>
                ))}


                  {navigation.pages2.map((page2) => (
                    <a
                      key={page2.name}
                      href={page2.href}
                      className="flex items-center font-title text-xl text-gray-800 hover:text-gray-900"
                    >
                      {page2.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
