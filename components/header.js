import { Tab, Tabs } from "@nextui-org/react";
import { BiSolidSun } from "react-icons/bi";
import { HiMoon, HiPencil } from "react-icons/hi";
import { TbUser } from "react-icons/tb";

import { Divider } from "@nextui-org/react";

export function Header() {
  return (
    <header className="flex justify-between px-3 pb-3">
      <div className="flex items-center">
        <div className="flex gap-8">
          <img
            className="w-18 h-10"
            src="https://2207347562-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9ZIO38hs5dVeDYMAZzYJ%2Fuploads%2FixNIOHkxdLmAwqSBzXEY%2FIMAGE%202022-12-05%2019%3A11%3A50.jpg?alt=media&token=1bfb41b9-7c5d-4442-92a3-418379a4a8f6"
            alt=""
          />
          <div className="flex gap-3">
            <p className="flex text-base font-medium items-center gap-1">
              <HiPencil /> How It Work
            </p>
            <p className="flex text-base font-medium items-center gap-1">
              <TbUser />
              Refer&Earn
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex bg-gray-100 rounded-3xl px-3 items-center py-2">
          <img
            className="w-5 h-4"
            src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
            alt=""
          />
          <select className="bg-transparent text-purple-600 font-bold text-xs">
            <option value="POLY">POLY</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4 ">
          <Tabs color={"secondary"} aria-label="Tabs colors" radius="full">
            <Tab key="Classic" title="Classic" />
            <Tab key="Pro" title="Pro" />
          </Tabs>
        </div>
        <div className="flex items-center rounded-3xl px-4 bg-gray-100 py-3 ">
          <div className="flex h-3 items-center space-x-4 text-small">
            <HiMoon className="text-base" />
            <Divider orientation="vertical" />
            <BiSolidSun className="text-base text-gray-500" />
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl px-4 py-[1px]">
          <p className="text-sm font-semibold">Disconnet</p>
          <p className="text-[10px] text-gray-500">Oxae...68ca</p>
        </div>
      </div>
    </header>
  );
}
