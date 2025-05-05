"use client";

import { useGetAllProducts } from "@/features/product/model";
import { Catalog } from "@/shared/components/ui";
import { IProduct } from "@/shared/types/product";
import { useSearchParams } from "next/navigation";

type Props = {
  products: IProduct[];
};

export function Explorer({ products }: Props) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const { data } = useGetAllProducts(products, searchTerm);

  return (
    <div className="my-6">
      <Catalog
        title={
          searchTerm ? `Поиск по запросу "${searchTerm}"` : "Каталог товаров"
        }
        products={data}
      />
    </div>
  );
}
