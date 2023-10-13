/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  SunIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="">
        <nav
          className="mx-auto flex items-center justify-between p-6 lg:px-8 bg-brightBlue text-white"
          aria-label="Global"
        >
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="uppercase">Crypto-nested</span>
            </a>
          </div>
          <div className="flex">
            <button type="button" className="mx-2">
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button type="button">
              <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className=""
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed bottom-0 z-10 w-full md:w-6/12 mx-auto inset-x-0 bg-darkGray text-white p-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="uppercase font-bold">Cryptoniq</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
                  >
                    Features
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-500"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className="">
        <div className="grid grid-cols-2 w-full">
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
