export function HistoryChartRow() {
  return (
    <div className="grid grid-cols-[200px_150px_150px_150px_150px_150px_150px] my-4 px-4 border-t-2 border-t-gray-200 py-2 text-sm">
      <h1 className="text-black font-medium ">Asset bet on</h1>
      <p className="text-gray-500 ">Bet Size</p>
      <p className="text-gray-500 ">Round Duration</p>
      <p className="text-gray-500 ">Opening Price</p>
      <p className="text-gray-500 ">Closing Price</p>
      <p className="text-gray-500 ">Countdown</p>
      <p className="text-gray-500 ">Outcome</p>
    </div>
  );
}
