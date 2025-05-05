import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { IOrderItem } from "@/shared/types/orderItem";
import { formatPrice } from "@/shared/utils";
import Image from "next/image";
import Link from "next/link";
import { OrderActions } from "./OrderActions";

type Props = {
  order: IOrderItem;
};

export function OrderItem({ order }: Props) {
  return (
    <div className="flex items-center mb-5">
      <Link
        href={PUBLIC_URL.product(order.product.id)}
        className="relative h-28 w-28 rounded-md overflow-hidden"
      >
        <Image
          src={order.product.images[0]}
          alt={order.product.title}
          fill
          className="object-cover"
        />
      </Link>
      <div className="ml-6">
        <h2 className="font-medium line-clamp-1">{order.product.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {formatPrice(order.product.price)}
        </p>
        <OrderActions order={order} />
      </div>
    </div>
  );
}
