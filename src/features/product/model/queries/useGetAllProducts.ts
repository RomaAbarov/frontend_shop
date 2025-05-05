import { productApi } from "@/entities/product-card";
import { IProduct } from "@/shared/types/product";
import { useQuery } from "@tanstack/react-query";

export function useGetAllProducts(
  initialProducts: IProduct[],
  searchTerm?: string | null
) {
  const { data } = useQuery({
    ...productApi.getAll(searchTerm),
    initialData: initialProducts,
  });

  return { data };
}
