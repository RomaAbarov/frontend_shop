import { productService } from "@/shared/services/product.service";
import { queryOptions } from "@tanstack/react-query";

export const productApi = {
  basekey: "product",

  getById: (id: string, initialProductId: string) => {
    return queryOptions({
      queryKey: [productApi.basekey, initialProductId],
      queryFn: () => productService.getById(id),
    });
  },

  getAll: (searchTerm?: string | null) => {
    return queryOptions({
      queryKey: [productApi.basekey, searchTerm],
      queryFn: () => productService.getAll(searchTerm),
    });
  },
};
