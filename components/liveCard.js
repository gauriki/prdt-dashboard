import { Progress, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { HistoryChartRow } from "./historyChartRow";
import { HistoryData } from "./historyData";

export function LiveCard() {
  return (
    <div className="grid grid-cols-[2.5fr_1fr] gap-4 my-3">
      <div className="bg-white rounded-md  py-2">
        <div className="flex justify-between px-4">
          <p className="text-base font-medium">Live rounds & History</p>
          <div className="flex gap-3">
            <div className="flex  gap-4">
              <Tabs aria-label="Tabs sizes">
                <Tab key="photos" title="Claim All" />
                <Tab
                  key="music"
                  title={
                    <div className="flex items-center gap-1">
                      <p>341</p>
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=026"
                        alt=""
                      />
                    </div>
                  }
                />
              </Tabs>
            </div>
            <div className="flex  gap-4">
              <Tabs aria-label="Tabs sizes">
                <Tab title="Claim All" />

                <Tab
                  title={
                    <div className="flex items-center gap-1">
                      <p>341</p>
                      <img
                        className="h-5 w-5 rounded-full"
                        src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
                        alt=""
                      />
                    </div>
                  }
                />
              </Tabs>
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col min-w-full max-w-0 overflow-x-auto">
          <HistoryChartRow />
          <HistoryData
            betName="BNB-USDT"
            duration="5 Minutes"
            openingPrice="Starting Round..."
            closingPrice="Waiting"
            countdown="00.00.00"
            outcome="Calculating"
            size="$300.12"
            btn="Short"
          />
          <HistoryData
            betName="ETH-USDT"
            size="$300.12"
            duration="2 Minutes"
            openingPrice="$1,823.00"
            closingPrice="$20.82"
            countdown="10.20.00"
            outcome="$650.09"
            btn="Short"
          />
          <HistoryData
            betName="ETH-USDT"
            size="$300.12"
            duration="10 Minutes"
            openingPrice="$1,823.00"
            closingPrice="$1,823.00"
            countdown="10.20.00"
            outcome="Losing"
            btn="Short"
          />
          <HistoryData
            betName="ETH-USDT"
            size="$300.12"
            duration="15 Minutes"
            openingPrice="$1,823.00"
            closingPrice="$20.82"
            countdown="Expired"
            outcome="$200.92"
            btn="Short"
          />
          <HistoryData
            betName="ETH-USDT"
            size="$300.12"
            duration="15 Minutes"
            openingPrice="$1,823.00"
            closingPrice="$20.82"
            countdown="Expired"
            outcome="$200.92"
            btn="Short"
            class="bg-pink-2    00"
          />
        </div>
      </div>
      <div className="bg-white rounded-md px-4 py-4 flex flex-col">
        <div className="flex justify-between">
          <div>
            <h1 className="text-sm font-semibold">02 min 29 sec</h1>
            <p className="text-[10px] text-gray-500 font-medium">Round 23</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <img
                className="h-4 w-4 rounded-full"
                src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
                alt=""
              />
              <p className="text-[10px] font-semibold ">AUCTION MATIC</p>
            </div>
            <div className="flex items-center gap-[2px] bg-gray-100 rounded-md px-2 py-1">
              <img
                className="h-4 w-4 rounded-full"
                src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
                alt=""
              />
              <p className="text-[10px] font-semibold ">HISTORY</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div>
            <p className="text-[12px] text-gray-400">Prize pool</p>
            <p className="font-semibold text-base">3710</p>
            <p className="text-xs  font-medium">Highest Bid 80</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-4">
              <Tabs
                color={"success"}
                aria-label="Tabs colors"
                radius="md"
                className="px-2"
              >
                <Tab
                  title={
                    <div className="flex gap-1">
                      <img
                        className="h-4 w-4 rounded-full"
                        src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=026"
                        alt=""
                      />
                      <p className="text-[12px] font-semibold ">0.24</p>
                    </div>
                  }
                />
                <Tab title="BID" />
              </Tabs>
            </div>
            <p className="text-xs text-right mt-2">My MATIC:532</p>
          </div>
        </div>
        <div className="my-3">
          <Progress
            aria-label="Loading..."
            color="success"
            value={60}
            className="max-w-md"
          />
        </div>
        <div className="flex w-full gap-10 flex-col items-center my-3">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Claimeble Rewards"></Tab>
            <Tab key="music" title="300 MATIC"></Tab>
            <Tab key="videos" title="Claim"></Tab>
          </Tabs>
        </div>

        <div className="flex  gap-4 items-center  justify-around  my-3 text-gray-700">
          <div>
            <p className="text-sm">Round #</p>
            <p className="text-base font-semibold">23</p>
          </div>
          <div>
            <p className="text-sm">Bid</p>
            <p className="text-[15px] font-semibold">50 MATIC</p>
          </div>
          <div>
            <p className="text-sm">Earned</p>
            <p className="text-[15px] font-semibold">100 MATIC</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm">Place</p>
            <p className="text-sm bg-gray-200 rounded-full w-6 h-6 flex justify-center">
              3
            </p>
          </div>
        </div>
        <hr />
        <div className="flex  gap-4 items-center  justify-around  my-3 text-gray-700">
          <div>
            <p className="text-sm">Round #</p>
            <p className="text-base">24</p>
          </div>
          <div>
            <p className="text-sm">Bid</p>
            <p className="text-[15px] font-semibold">130 MATIC</p>
          </div>
          <div>
            <p className="text-sm">Earned</p>
            <p className="text-[15px] font-semibold">100 MATIC</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm">Place</p>
            <p className="text-sm bg-gray-200 rounded-full w-6 h-6 flex justify-center">
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
