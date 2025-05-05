"use client";

import { DataTable } from "@/shared/components/ui";
import { Button } from "@/shared/components/ui/button";
import {
  IOrderColumn,
  orderColumns,
} from "@/shared/components/ui/dashboard/OrderColumn";
import { useLogout } from "@/shared/hooks/mutations/useLogout";
import { useProfile } from "@/shared/hooks/queries/useProfile";
import { EnumOrderStatus } from "@/shared/types/order";
import { formatDate, formatPrice } from "@/shared/utils";
import { LogOut } from "lucide-react";

export function Dashboard() {
  const { user } = useProfile();
  const { logout } = useLogout();

  if (!user) {
    return null;
  }

  const formattedOrders: IOrderColumn[] = user.orders.map((order) => ({
    createdAt: formatDate(order.createdAt),
    status: order.status === EnumOrderStatus.PENDING ? "В ожидании" : "Оплачен",
    total: formatPrice(order.total),
  }));

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Ваши заказы</h1>
        <Button variant="ghost" onClick={() => logout()}>
          <LogOut className="size-4 mr-2" />
          Выйти
        </Button>
      </div>
      <DataTable columns={orderColumns} data={formattedOrders} />
    </div>
  );
}
