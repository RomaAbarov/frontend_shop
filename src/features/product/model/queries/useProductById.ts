import { productApi } from "@/entities/product-card";
import { IProduct } from "@/shared/types/product";
import { useQuery } from "@tanstack/react-query";

export function useProductById(id: string, initialProduct: IProduct) {
  const { data: product } = useQuery({
    ...productApi.getById(id, initialProduct.id),
    initialData: initialProduct,
    enabled: !!id,
  });

  return { product };
}
