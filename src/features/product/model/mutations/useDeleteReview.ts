import { productApi } from "@/entities/product-card";
import { queryClient } from "@/shared/services/api/query-client";
import { reviewService } from "@/shared/services/review.service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteReview() {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => reviewService.deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productApi.basekey] });
      toast.success("Отзыв удален");
    },
    onError: () => toast.error("Ошибка при удалении отзыва"),
  });

  return { mutate, isPending };
}
