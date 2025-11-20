import { Trash2 } from "lucide-react";

export function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {quantity > 1 ? (
        <button
          onClick={onDecrease}
          className="w-8 h-8 flex items-center justify-center 
          bg-gray-200 rounded-md text-lg font-bold
          hover:bg-gray-300 cursor-pointer"
        >
          -
        </button>
      ) : (
        <button
          onClick={onRemove}
          className="w-8 h-8 flex items-center justify-center 
          bg-red-200 text-red-600 rounded-md
          hover:bg-red-300 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      )}
      <span className="min-w-8 text-center font-bold">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center 
        bg-gray-200 rounded-md text-lg font-bold
        hover:bg-gray-300 cursor-pointer"
      >
        +
      </button>
    </div>
  );
}