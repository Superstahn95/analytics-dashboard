import React from "react";
import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

function ChartFilter() {
  // pr-4 md:pr-16
  return (
    <div className="flex space-x-1  items-center   font-inter">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full p-1 border border-[#DADDDD] rounded-[28px] justify-center items-center">
            <div className="  ">
              <p className="text-end text-[#26282C] dark:text-white text-[16px]">
                Monthly
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
          <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-[#F7F8FA] dark:bg-slate-700 rounded shadow-sm">
            <div className="p-1">
              <Menu.Item>
                <p className="flex hover:bg-[#34CAA5] hover:text-white text-gray-700 dark:text-white rounded p-2 text-sm group transition-colors items-center">
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Monthly
                </p>
              </Menu.Item>
              <Menu.Item>
                <button className=" w-full flex hover:bg-[#34CAA5] hover:text-white text-gray-700 dark:text-white rounded p-2 text-sm group transition-colors items-center">
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  Weekly
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default ChartFilter;
