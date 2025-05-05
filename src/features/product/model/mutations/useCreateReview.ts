import { productApi } from "@/entities/product-card";
import { queryClient } from "@/shared/services/api/query-client";
import { reviewService } from "@/shared/services/review.service";
import { IReviewInput } from "@/shared/types/review";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function useCreateReview(onSuccessCallback?: () => void) {
  const params = useParams<{ id: string }>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IReviewInput) =>
      reviewService.createReview(data, params.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productApi.basekey] });
      toast.success("Отзыв создан");
      onSuccessCallback?.();
    },
    onError: () => toast.error("Ошибка при создании отзыва"),
  });

  return { mutate, isPending };
}
