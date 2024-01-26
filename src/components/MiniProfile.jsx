import React from "react";
import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

function MiniProfile() {
  const altImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <div className="flex space-x-1  items-center  pr-4 md:pr-16 font-inter">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full p-1 border border-[#DADDDD] rounded-[28px] justify-center items-center">
            <div>
              <img
                src={altImage}
                className="w-8 h-8 rounded-full md:mr-4 border-2 border-white shadow-sm"
                alt=""
              />
            </div>
            {/* <span className="hidden md:block font-medium text-gray-700">
              Stanley
            </span> */}
            <div className=" flex-col hidden md:flex ">
              <p className="text-end text-[#26282C] dark:text-white text-[16px]">
                Justin Bargson
              </p>
              <p className="text-end text-[#787486] dark:text-white text-[14px]">
                Justin@gmail.com
              </p>
            </div>
            <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700 dark:text-white" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform scale-95"
          enterTo="transform scale-100"
          leave="transition ease-in duration=75"
          leaveFrom="transform scale-100"
          leaveTo="transform scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
            <div className="p-1">
              <Menu.Item>
                <p className="flex hover:bg-[#34CAA5] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Go to Home
                </p>
              </Menu.Item>
              <Menu.Item>
                <button className=" w-full flex hover:bg-[#34CAA5] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  Log out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default MiniProfile;
