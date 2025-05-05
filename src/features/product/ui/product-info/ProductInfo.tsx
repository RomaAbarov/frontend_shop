import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { IProduct } from "@/shared/types/product";
import Link from "next/link";
import { AddToCardButton } from "./AddToCardButton";
import { FavoriteButton } from "./FavoriteButton";
import { formatPrice, getReviewWordWithEnding } from "@/shared/utils";

type Props = {
  product: IProduct;
};

export function ProductInfo({ product }: Props) {
  const rating =
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
    ) || 0;

  return (
    <div className="mt-10 space-y-5 sm:mt-16 lg:mt-0">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="text-2xl">{formatPrice(product.price)}</div>
      <hr className="my-4" />
      <p className="text-muted-foreground text-sm">{product.description}</p>
      <hr />
      <div className="flex items-center gap-x-4">
        <h3>Категория: </h3>
        <Link
          className="text-sm"
          href={PUBLIC_URL.category(product.category.id)}
        >
          {product.category.title}
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <h3>Средний рейтинг: </h3>
        <div className="text-sm">
          ⭐ {rating.toFixed(1)} |{" "}
          {getReviewWordWithEnding(product.reviews.length)}
        </div>
      </div>
      <hr />
      <div className="flex items-start gap-x-2">
        <AddToCardButton product={product} />
        <FavoriteButton product={product} />
      </div>
    </div>
  );
}
