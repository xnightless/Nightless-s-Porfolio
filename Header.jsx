import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import LoadingBar from "@weblif/react-top-loading-bar";
const navigation = [
  {
    href: "/",
    name: "About Me",
    progress: 25,
  },
  {
    href: "/skills",
    name: "My Skills",
    progress: 50,
  },
  {
  
    href: "/contact",
    name: "Contact",
    progress: 100,
  },
  {
    href: "/projects",
    name: "Projects",
    progress: 125,
  },
  {
    href: "/Links",
    name: "Links",
    progress: 150,
  },
];

export default function Header() {
  const [progress, setProgress] = useState(0);
  return (
    <Popover className="relative bg-lilbitdark">
      <LoadingBar
        color="#ffffff"
        progress={progress}
        onLoaderFinished={() => setProgress(99)}
      />
      <div className="flex justify-center text-center items-center px-4 py-6 sm:px-6">
        <div>
          <span className="sr-only">Nightless</span>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-lilbitgray rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center">
          <Popover.Group as="nav" className="flex space-x-10">
            {navigation.map((navlink) => (
              <Link
                key={navlink.name}
                to={navlink.href}
                onClick={() => setProgress(navlink.progress)}
                className="text-lg font-medium text-gray-300 hover:text-gray-400"
              >
                {navlink.icon} {navlink.name}
              </Link>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg bg-lilbitdark divide-y-2 divide-gray-500">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <Popover.Button className="bg-lilbitdark rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((navlink) => (
                  <Link
                    key={navlink.name}
                    to={navlink.href}
                    onClick={() => setProgress(navlink.progress)}
                    className="text-lg font-bold text-gray-300 hover:text-gray-400"
                  >
                    {navlink.icon} {navlink.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
