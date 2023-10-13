/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  SunIcon, Bars3Icon, XMarkIcon, ArrowLeftIcon, Cog8ToothIcon,
  Squares2X2Icon, ShoppingBagIcon, PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

function Navbar({ dark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed z-10 w-full md:w-6/12 mx-auto ">
      <nav className="mx-auto flex items-center justify-between p-6 bg-brightBlueSupDark text-white dark:bg-newRed" aria-label="Global">
        <div className="flex gap-10">
          {isHomePage ? (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : (
            <>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <Link to="/">
                <ArrowLeftIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </Link>
            </>
          )}
        </div>
        <div className="flex">
          <Link to="/">
            <span className="uppercase font-bold">Crypto-Nested</span>
          </Link>
        </div>
        <div className="flex">
          <button
            type="button"
            className="mx-2"
            onClick={dark}
          >
            <SunIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed bottom-0 z-10 w-full md:w-6/12 mx-auto inset-x-0 bg-darkGray text-white p-6 py-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="uppercase font-bold">Crypto-Nested</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="w-full py-6 grid grid-cols-2 place-items-center gap-10 margin-auto">
                <Link to="/" className="hover:text-gray-500">
                  <Squares2X2Icon className="w-6/12" aria-hidden="true" />
                </Link>
                <Link to="/" className="hover:text-gray-500">
                  <PresentationChartLineIcon className="w-6/12" aria-hidden="true" />
                </Link>
                <Link to="/" className="hover:text-gray-500">
                  <ShoppingBagIcon className="w-6/12" aria-hidden="true" />
                </Link>
                <Link to="/" className="hover:text-gray-500">
                  <Cog8ToothIcon className="w-6/12" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

Navbar.defaultProps = {
  dark: () => {},
};

Navbar.propTypes = {
  dark: PropTypes.func,
};

export default Navbar;
