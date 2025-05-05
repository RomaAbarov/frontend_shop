import { Button } from "@/shared/components/ui/button";
import { ConfirmModal } from "@/shared/components/ui/modals/ConfirmModal";
import { ReviewModal } from "@/shared/components/ui/modals/ReviewModal";
import { useProfile } from "@/shared/hooks/queries/useProfile";
import { IProduct } from "@/shared/types/product";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { useDeleteReview } from "../model";

type Props = {
  product: IProduct;
};

export function ProductReviews({ product }: Props) {
  const { user } = useProfile();

  const deleteReview = useDeleteReview();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Отзывы</h1>
        {user && (
          <ReviewModal>
            <Button variant="ghost">
              <Plus className="size-4 mr-2" />
              Добавить отзыв
            </Button>
          </ReviewModal>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {product.reviews.length ? (
          product.reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-4 font-medium">
                  <Image
                    src={review.user.picture}
                    alt={review.user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {review.user.name}
                </div>
                {review.user.id === user?.id && (
                  <ConfirmModal
                    handleClick={() => deleteReview.mutate(review.id)}
                  >
                    <button className="mt-3 text-red-500">
                      <Trash className="size-5" />
                    </button>
                  </ConfirmModal>
                )}
              </div>
              <Rating
                readonly
                initialValue={review.rating}
                SVGstyle={{
                  display: "inline-block",
                }}
                size={18}
                allowFraction
                transition
              />
              <div className="text-sm text-muted-foreground mt-1">
                {review.text}
              </div>
            </div>
          ))
        ) : (
          <div className="mt-4">У этого товара нету отзывов</div>
        )}
      </div>
    </>
  );
}
