import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { useOrder } from "@/shared/hooks/useOrder";
import { useProfile } from "@/shared/hooks/queries/useProfile";
import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { useRouter } from "next/navigation";
import { useCheckout } from "../model/useCheckout";
import { OrderItem } from "@/entities/order-item";
import { formatPrice } from "@/shared/utils";
import { useState } from "react";

export function HeaderCard() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { user } = useProfile();
  const { items, total } = useOrder();

  const createPayment = useCheckout();

  function handleClick() {
    if (user) {
      setIsOpen(false);
      createPayment.mutate();
    } else {
      router.push(PUBLIC_URL.auth());
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">Корзина</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-xl">
          <SheetTitle>Корзина товаров</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col w-full flex-1">
          {items.length ? (
            items.map((item) => <OrderItem order={item} key={item.id} />)
          ) : (
            <div className="text-sm text-muted-foreground">Корзина пустая!</div>
          )}
        </div>
        {items.length ? (
          <>
            <div className="text-lg font-medium">
              Итого к оплате: {formatPrice(total)}
            </div>
            <Button
              className="w-full"
              onClick={handleClick}
              disabled={createPayment.isPending}
            >
              Перейти к оплате
            </Button>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
