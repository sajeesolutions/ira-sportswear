'use client'
import IRA_Logo from '../assests/IRA Logos.png';
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
      name: 'SPORTS',
       /* featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'images',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: '',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ], */
      sections: [
        {
          id: 'badminton',
          name: 'Badminton',
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
            { name: 'Jackets', href: '#' },
          ],
        },
        {
          id: 'tennis',
          name: 'Tennins',
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'pickelball',
          name: 'Pickel Ball',
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'scorrer',
          name: 'scorrer',
          items: [
            { name: 'Performance Tee', href: '#' },
            { name: 'Shorts', href: '#' },
          ],
        },
        {
          id: 'cricket',
          name: 'Cricket',
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
      id: 'CorporateClothing',
      name: 'Corporate Clothing',
      sections: [
        {
          id: '',
          name: '',
          items: [
            { name: '', href: '#' },
            { name: '', href: '#' },
            { name: '', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'digitalsolutions',
      name: 'Digital Solutions',
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
          items: [
            { name: 'Logo Design', href: '#' },
            { name: 'Shopify integration', href: '#' },
          ],
        },
        {
          id: 'signage',
          name: 'Signage',
          items: [
            { name: 'Vinyl Banners', href: '#' },
            { name: 'Fabric Banners', href: '#' },
            { name: 'Posters', href: '#' },
          ],
        },
        {
          id: 'fangear',
          name: 'Fan Gear',
          items: [
            { name: 'Game Day Essentials', href: '#' },
            { name: 'Supporter Items', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'sportshub',
      name: 'Sports Hub',
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
          id: 'digitalsolutions',
          name: 'Digital Solutions',
          items: [
            { name: 'Logo Design', href: '#' },
            { name: 'Shopify integration', href: '#' },
          ],
        },
        {
          id: 'signage',
          name: 'Signage',
          items: [
            { name: 'Vinyl Banners', href: '#' },
            { name: 'Fabric Banners', href: '#' },
            { name: 'Posters', href: '#' },
          ],
        },
        {
          id: 'fangear',
          name: 'Fan Gear',
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

  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1488) {
        setIsMobile(true); // Mobile view
       // setOpen(true); // Open dialog when in mobile view
      } else {
        setIsMobile(false); // Larger view
      //  setOpen(false); // Close dialog when screen is wide enough
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
        <p className="flex h-6 w-full items-center justify-center bg-opacity-2 bg-iraprimary px-4 text-sm font-normal text-white ease-out sm:px-6 lg:px-8" style={{backgroundColor: "#d9d9d9",color:"#000000",fontFamily: 'sans-serif'}} >
          Contact Our Customer Support for any questions or concerns +1 847 624 2660
        </p>
        <p className="flex h-8 justify-end px-4 text-sm font-semibold sm:px-6 lg:px-8">
          <a href="" className="flex text-xs text-gray-700 hover:text-gray-800 m-1 p-1">Size Guide</a>
          <a href="" className="flex text-xs text-gray-700 hover:text-gray-800 m-1 p-1">Contact Us</a>
          <a href="" className="flex text-xs text-gray-700 hover:text-gray-800 m-1 p-1">FAQ</a>
        </p>
        <nav aria-label="Top" className="mx-auto items-end max-w-full px-4 sm:px-6 lg:px-8 content-center">
          <div className="border-b border-gray-200">
            <div className="flex h-22 items-center">
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
              <div className="ml-4 relative flex h-8">
                <a href="#">
                  <span className="sr-only">IRA Sportswear</span>
                  <img
                    alt=""
                    src={IRA_Logo}
                    className="h-20 -mt-10 ml-12 w-auto laptop:-mt-10" 
                    />
                </a>
              </div>

              

              <div className="hidden laptop:flex ml-auto h-8 m-2 p-0 flex gap-x-8 gap-y-10 items-center">
                {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-20 lg:block lg:self-stretch">
                <div className="flex h-full right-0 justify-center items-center space-x-8 mr-14">
               
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-bold text-gray-800 transition-all duration-400 ease-linear hover:text-gray-900 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name.toUpperCase()}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute z-index:50 z-50 inset-x-0 top-full text-sm text-gray-800 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                             
                              <div className="row-start-0 grid grid-cols-6 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name} >
                                    <p id={`${section.name}-heading`} className="font-semibold text-left border-b-2 text-gray-900">
                                      {section.name.toUpperCase()}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
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
                    </Popover>
                  ))}

                  {navigation.pages2.map((page2) => (
                    <a
                      key={page2.name}
                      href={page2.href}
                      className="flex items-center text-sm capitalize font-bold text-gray-800 hover:text-gray-900"
                    >
                      {page2.name.toUpperCase()}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 flex-wrap lg:items-center lg:justify-end lg:space-x-8 mr-16">
                  <a href="#" className="text-sm w-fit font-semibold bg-iraprimaryb m-2 p-2 rounded-lg hover:text-white-800 text-white">
                    Sign up
                  </a>
                </div>

               
                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
