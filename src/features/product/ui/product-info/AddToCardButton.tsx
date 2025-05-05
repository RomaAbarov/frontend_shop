import { Button } from "@/shared/components/ui/button";
import { useActions } from "@/shared/hooks/useActions";
import { useOrder } from "@/shared/hooks/useOrder";
import { IProduct } from "@/shared/types/product";

type Props = {
  product: IProduct;
};

export function AddToCardButton({ product }: Props) {
  const { addToOrder, removeFromOrder } = useActions();
  const { items } = useOrder();

  const orderItem = items.find((i) => i.product.id === product.id);

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() =>
        orderItem
          ? removeFromOrder({ id: orderItem.id })
          : addToOrder({
              product,
              quantity: 1,
              price: product.price,
            })
      }
    >
      {orderItem ? "Удалить из корзины" : "Добавить в корзину"}
    </Button>
  );
}
