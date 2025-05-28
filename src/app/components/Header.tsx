'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#32745a] w-full z-50 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <span className="sr-only">QuickCare</span>
            <Image
              src="/logo.png"
              alt="QuickCare Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-white">QuickCare</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-[#3c8a6b] hover:bg-[#317359] focus:outline-none"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className="text-sm font-semibold text-white hover:text-[#3c8a6b]">
            Rechercher
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white hover:text-[#3c8a6b]">
            A propos
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-[#32745a]/80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#32745a] px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-[#317359]">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">QuickCare</span>
              <Image
                src="/logo.png"
                alt="QuickCare Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2 rounded-md p-2 text-[#3c8a6b] hover:bg-[#317359]"
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flow-root">
            <div className="-my-4 divide-y divide-[#3c8a6b]/30">
              <div className="space-y-2 py-4">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#317359]"
                >
                  Rechercher
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#317359]"
                >
                  A propos
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
