import { useActions } from "@/shared/hooks/useActions";
import { useOrder } from "@/shared/hooks/useOrder";
import { orderService } from "@/shared/services/order.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useCheckout() {
  const { items } = useOrder();
  const { reset } = useActions();

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      orderService.place({
        items: items.map((item) => ({
          price: item.price,
          quantity: item.quantity,
          productId: item.product.id,
        })),
      }),
    onSuccess({ data }) {
      //router.push(data); переход на страницу оплаты
      router.push("/thanks");
      reset();
    },
    onError() {
      toast.error("Ошибка при создании платежа");
    },
  });

  return { mutate, isPending };
}
