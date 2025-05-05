import { Button } from "@/shared/components/ui/button";
import { useActions } from "@/shared/hooks/useActions";
import { useOrder } from "@/shared/hooks/useOrder";
import { IOrderItem } from "@/shared/types/orderItem";
import { Minus, Plus } from "lucide-react";

type Props = {
  order: IOrderItem;
};

export function OrderActions({ order }: Props) {
  const { changeQuantity } = useActions();
  const { items } = useOrder();

  const quantity = items.find((i) => i.id === order.id)?.quantity;

  return (
    <div className="flex items-center mt-1">
      <Button
        className="size-7"
        onClick={() => changeQuantity({ id: order.id, type: "minus" })}
        variant="ghost"
        size="icon"
        disabled={quantity === 1}
      >
        <Minus className="size-4" />
      </Button>

      <input
        className="w-10 text-center text-sm"
        disabled
        readOnly
        value={quantity}
      />

      <Button
        className="size-7"
        onClick={() => changeQuantity({ id: order.id, type: "plus" })}
        variant="ghost"
        size="icon"
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
