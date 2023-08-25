export function HistoryData(p) {
  return (
    <div className="grid grid-cols-[200px_150px_150px_150px_150px_150px_150px] px-4 my-3 border-t-2 border-t-gray-200 py-2 self-end text-sm">
      <div className="flex items-center gap-2">
        <h1 className="text-black font-medium  text-sm ">{p.betName}</h1>
        <img
          className="w-5 h-5"
          src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png?v=026"
        />
        <button className={p.class + " font-semibold border border-blue-800"}>
          {p.btn}
        </button>
      </div>
      <p className="text-gray-500 ">{p.size}</p>
      <p className="text-gray-500 ">{p.duration}</p>
      <p className="text-gray-500 ">{p.openingPrice}</p>
      <p className="text-gray-500 ">{p.closingPrice}</p>
      <p className="text-gray-500 ">{p.countdown}</p>
      <p className="text-gray-500 ">{p.outcome}</p>
    </div>
  );
}
