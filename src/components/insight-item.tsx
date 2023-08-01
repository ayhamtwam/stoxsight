import { useState } from "react";
import { FollowIcon, PlusIcon, UserIcon } from "../assets";

interface StatisticProps {
  label: string;
  value: string;
  color?: string;
}

interface ButtonProps {
  value: string;
  Icon: () => JSX.Element;
}

interface InsightItemProps {
  label: string;
  option: string;
  statistics: {
    label: string;
    value: string;
    color?: string;
  }[];
}

const Statistic = ({ label, value, color }: StatisticProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-xs text-gray-400">{label}</span>

      <span
        style={{
          color: color,
        }}
        className="font-bold text-xs"
      >
        {value}
      </span>
    </div>
  );
};

const Button = ({ value, Icon }: ButtonProps) => {
  return (
    <div
      className="flex items-center bg-gray-200 px-2 py-0.5 rounded-sm gap-1 cursor-pointer"
      onClick={(element: React.MouseEvent<HTMLDivElement>) => {
        element.stopPropagation();
      }}
    >
      <Icon />

      <span className="font-medium text-gray-500 text-sm">{value}</span>
    </div>
  );
};

const InsightItem = ({ label, option, statistics }: InsightItemProps) => {
  const [isExpanded, setExpand] = useState(false);

  const statisticsFirstRow = statistics.slice(0, 5);
  const statisticsSecondRow = statistics.slice(5, statistics.length);

  return (
    <div
      className={`flex flex-col items-start w-[400px] bg-white rounded-md px-4 py-4 gap-3 drop-shadow-sm transition-all ease-linear overflow-hidden ${
        isExpanded ? "h-[184px]" : "h-[72px]"
      }`}
      onDoubleClick={() => {
        setExpand(!isExpanded);
      }}
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-bold leading-none">{label}</span>

          <span
            className={`font-bold text-xs ${
              option === "CALL" ? "text-green-0" : "text-red-500"
            }`}
          >
            {option}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-5">
            {statisticsFirstRow.map((statistic: StatisticProps) => {
              const label = statistic.label;
              const value = statistic.value;
              const color = statistic.color;

              return <Statistic label={label} value={value} color={color} />;
            })}
          </div>

          <div className="flex gap-5">
            {statisticsSecondRow.map((statistic: StatisticProps) => {
              const label = statistic.label;
              const value = statistic.value;
              const color = statistic.color;

              return <Statistic label={label} value={value} color={color} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm">50 users following this trade</span>

        <div className="flex gap-1">
          <Button value="ayham" Icon={UserIcon} />
          <Button value="Follow User" Icon={FollowIcon} />
          <Button value="Follow Trade" Icon={PlusIcon} />
        </div>
      </div>
    </div>
  );
};

export default InsightItem;
