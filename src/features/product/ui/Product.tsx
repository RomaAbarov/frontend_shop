"use client";

import { IProduct } from "@/shared/types/product";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./product-info/ProductInfo";
import { Catalog } from "@/shared/components/ui";
import { ProductReviews } from "./ProductReviews";
import { useProductById } from "@/features/product/model/queries/useProductById";

type Props = {
  id: string;
  initialProduct: IProduct;
  similarProducts: IProduct[];
};

export function Product({ id, initialProduct, similarProducts }: Props) {
  const { product } = useProductById(id, initialProduct);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-7 px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      <Catalog title="Похожие товары" products={similarProducts} />
      <ProductReviews product={product} />
    </div>
  );
}
