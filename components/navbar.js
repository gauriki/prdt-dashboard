import { FaGift } from "react-icons/fa";
import { TbDownload, TbUpload } from "react-icons/tb";

export function Navbar() {
  return (
    <div className=" border-t-gray-100 border-t-2 flex justify-between px-4 py-5 items-center">
      <div className="flex items-center gap-6">
        <div>
          <p className="text-sm font-semibold">Monthly Volume</p>
          <p className="text-base font-semibold">$34,203,456</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-gray-200 rounded-full">
            <img
              className="w-6 h-6 m-[6px]"
              src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026"
              alt=""
            />
          </div>
          <div className="flex bg-gray-200 rounded-full">
            <img
              className="w-6 h-6 m-[6px]"
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026"
              alt=""
            />
          </div>
          <div className="flex bg-gray-200 rounded-full">
            <img
              className="w-6 h-6 m-[6px]"
              src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026"
              alt=""
            />
          </div>
          <div className="flex bg-gray-200 rounded-full">
            <img
              className="w-6 h-6 m-[6px]"
              src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <FaGift className="text-3xl text-blue-900" />
        <div className="bg-gray-100 rounded-full flex items-center justify-center h-9 w-9">
          <TbDownload className="text-base  " />
        </div>
        <div className="bg-gray-100 rounded-full flex items-center justify-center h-9 w-9">
          <TbUpload className="text-base  " />
        </div>
      </div>
    </div>
  );
}
