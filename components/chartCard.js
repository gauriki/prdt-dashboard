import {
  BiSolidDownArrow,
  BiSolidPencil,
  BiSolidUpArrow,
} from "react-icons/bi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

import { Tab, Tabs } from "@nextui-org/react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";

export function ChartCard() {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-6 ">
      <div className="rounded-md bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[500px] bg-white rounded-md p-4 space-y-6">
        <p className="text-sm font-medium">Asset to predict price on</p>
        <div className="bg-gray-100 rounded-lg flex justify-between px-4 py-2 items-center my-2">
          <h1 className="text-base font-medium">BTC</h1>
          <div className="flex gap-3 items-center">
            <p className="text-xs font-medium">24598.180</p>
            <div className="bg-gray-300 rounded-md px-2 py-1">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex items-center gap-1">
                    <Image
                      isBlurred
                      width={22}
                      src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png?v=026"
                      alt="NextUI Album Cover"
                      classNames="m-5"
                    />
                    <BiSolidDownArrow className="text-[10px]" />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-medium">Prediction Timeframe</p>
          <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <MdOutlineReportGmailerrorred className="text-lg" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 my-2 ">
          <p className="rounded-md bg-gray-200 flex items-center px-4 justify-center py-2 text-sm">
            3min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            5min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            10min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            15min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            30min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center px-4 justify-center py-1">
            <BiSolidPencil />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-medium">Bet Size</p>
          <p className="text-sm font-medium">Wallet Balance:454</p>
        </div>
        <div className="bg-gray-100 rounded-md flex justify-between my-2 px-3 items-center">
          <p>1</p>
          <div className="">
            <div className="flex  gap-4">
              <Tabs aria-label="Tabs sizes">
                <Tab
                  title={
                    <img
                      className="w-6 h-6"
                      src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
                    />
                  }
                />

                <Tab
                  title={
                    <img
                      className="w-6 h-6"
                      src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=026"
                    />
                  }
                />
              </Tabs>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 my-4 ">
          <p className="rounded-md bg-gray-200 flex items-center px-4 justify-center py-2 text-sm">
            Min
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            250
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            500
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            700
          </p>
          <p className="rounded-md text-sm bg-gray-200 flex items-center justify-center px-4 py-1">
            Max
          </p>
        </div>
        <div className="mt-3 bg-white rounded-md">
          <div className="flex justify-between">
            <p className="text-gray-400 text-sm ">
              Payout :
              <span className="text-base font-semibold text-black">
                1.70 USDC
              </span>
            </p>
            <p className="text-gray-400 text-sm ">
              Profit :
              <span className="text-base font-semibold text-black">
                0.70 USDC
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 my-3">
            <button className="bg-gray-100 rounded-md text-green-600 gap-1 font-medium flex items-center px-4 justify-center">
              {" "}
              <BiSolidUpArrow className="text-xs" /> Up
            </button>
            <button className="bg-gray-100 text-red-600 gap-1 font-medium rounded-md py-2 flex items-center px-4 justify-center">
              {" "}
              <BiSolidDownArrow className="text-xs" /> Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
