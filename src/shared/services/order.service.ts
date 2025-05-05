import { axiosAuth } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { EnumOrderStatus, IPaymentResponse } from "@/shared/types/order";

type TypeData = {
  status?: EnumOrderStatus;
  items: {
    quantity: number;
    price: number;
    productId: string;
  }[];
};

class OrderService {
  async place(data: TypeData) {
    return axiosAuth<IPaymentResponse>({
      url: API_URL.orders(""),
      method: "POST",
      data,
    });
  }
}

export const orderService = new OrderService();
