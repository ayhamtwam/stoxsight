import { ArrowIcon } from "../assets";
import { InsightItem, StockItem } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 py-8 gap-2 overflow-scroll">
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-3">
          <span className="font-bold text-2xl leading-none">
            StoxSight's trending stocks
          </span>

          <span className="text-xs">(Double click to expand)</span>
        </div>

        <div className="flex">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 max-w-[1232px] overflow-hidden">
              <StockItem
                labels={{
                  stock: "MSFT",
                  brand: "Microsoft",
                }}
                price={337}
                change={1.7}
                img="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277"
              />

              <StockItem
                labels={{
                  stock: "TSLA",
                  brand: "Tesla",
                }}
                price={257}
                change={-1.5}
                img="https://www.svgrepo.com/show/342292/tesla.svg"
              />

              <StockItem
                labels={{
                  stock: "NFLX",
                  brand: "Netflix",
                }}
                price={444.21}
                change={0.76}
                img="https://pngimg.com/d/netflix_PNG15.png"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <div className="bg-white drop-shadow-sm rounded-full cursor-pointer">
                <div className="rotate-180">
                  <ArrowIcon />
                </div>
              </div>

              <div className="bg-white drop-shadow-sm rounded-full cursor-pointer">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-3">
            <span className="font-bold text-2xl leading-none">
              Latest insights
            </span>

            <span className="text-xs">(Double click to expand)</span>
          </div>

          <div className="flex flex-col gap-1.5 pb-6">
            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="MSFT"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$340",
                },
                {
                  label: "Entry",
                  value: "$2.18",
                },
                {
                  label: "Exit",
                  value: "$2.3",
                },
                {
                  label: "Stop Loss",
                  value: "$1.9",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="NVDA"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$425",
                },
                {
                  label: "Entry",
                  value: "$4.95",
                },
                {
                  label: "Exit",
                  value: "$6",
                },
                {
                  label: "Stop Loss",
                  value: "$4.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$420",
                },
                {
                  label: "Option Price",
                  value: "$5.2",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "Low",
                },
              ]}
            />

            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-3">
            <span className="font-bold text-2xl leading-none">
              Trending insights
            </span>

            <span className="text-xs">(Double click to expand)</span>
          </div>

          <div className="flex flex-col gap-1.5 pb-6">
            <InsightItem
              label="SPY"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$430",
                },
                {
                  label: "Entry",
                  value: "$1.31",
                },
                {
                  label: "Exit",
                  value: "$1.9",
                },
                {
                  label: "Stop Loss",
                  value: "$1.0",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />

            <InsightItem
              label="MSFT"
              option="CALL"
              statistics={[
                {
                  label: "Strike Price",
                  value: "$340",
                },
                {
                  label: "Entry",
                  value: "$2.18",
                },
                {
                  label: "Exit",
                  value: "$2.3",
                },
                {
                  label: "Stop Loss",
                  value: "$1.9",
                },
                {
                  label: "Expiry",
                  value: "6/16",
                },
                {
                  label: "Stock Price",
                  value: "$425",
                },
                {
                  label: "Option Price",
                  value: "$1.36",
                  color: "var(--green)",
                },
                {
                  label: "Profit",
                  value: "$50",
                  color: "var(--green)",
                },
                {
                  label: "Risk",
                  value: "High",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
