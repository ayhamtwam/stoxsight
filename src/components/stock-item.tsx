interface StockItemProps {
  labels: {
    stock: string;
    brand: string;
  };
  price: number;
  change: number;
  img: string;
}

const StockItem = ({ labels, price, change, img }: StockItemProps) => {
  return (
    <div className="flex items-center justify-between min-w-[400px] bg-white rounded-md px-5 py-5 drop-shadow-sm">
      <div className="flex gap-3">
        <img className="w-8 h-8" src={img} />

        <div className="flex flex-col gap-1.5">
          <span className="font-bold leading-none">{labels.stock}</span>

          <span className="text-xs leading-none w-28 truncate">
            {labels.brand}
          </span>
        </div>
      </div>

      <div className="flex h-full gap-8">
        <div className="flex flex-col justify-between">
          <span className="font-bold text-xs text-gray-400 leading-none">
            Price
          </span>

          <span className="font-bold text-xs leading-none">${price}</span>
        </div>

        <div className="flex flex-col justify-between">
          <span className="font-bold text-xs text-gray-400 leading-none">
            Change
          </span>

          <span
            className={`font-bold text-xs leading-none ${
              change > 0 ? "text-green-0" : "text-red-500"
            }`}
          >
            {change > 0 ? "+" : ""}
            {change}% Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
