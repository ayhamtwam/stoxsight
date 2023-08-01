// import { InsightItem } from "../components";

const Following = () => {
  return (
    <div className="flex w-full h-full px-10 py-8 gap-4 overflow-scroll">
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-3">
          <span className="font-bold text-2xl leading-none">
            Followed users insights
          </span>

          <span className="text-xs">(Double click to expand)</span>
        </div>

        <div className="flex flex-col gap-1.5 pb-6">
          {/* <InsightItem />
          <InsightItem />
          <InsightItem /> */}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-3">
          <span className="font-bold text-2xl leading-none">
            Followed insights
          </span>

          <span className="text-xs">(Double click to expand)</span>
        </div>

        <div className="flex flex-col gap-1.5 pb-6">
          {/* <InsightItem /> */}
        </div>
      </div>
    </div>
  );
};

export default Following;
