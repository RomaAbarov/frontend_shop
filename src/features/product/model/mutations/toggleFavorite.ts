import { profileApi } from "@/shared/services/api/profileApi";
import { queryClient } from "@/shared/services/api/query-client";
import { userService } from "@/shared/services/user.service";
import { useMutation } from "@tanstack/react-query";
import { startTransition, useOptimistic } from "react";

export function toggleFavorite(isFavorite: boolean) {
  const [favorite, setFavorite] = useOptimistic(isFavorite);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (productId: string) => userService.toggleFavorite(productId),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [profileApi.basekey] }),
  });

  function toggle(productId: string) {
    startTransition(async () => {
      setFavorite(!favorite);

      await mutateAsync(productId);
    });
  }

  return { toggle, isOptimisticFavorite: () => favorite, isPending };
}
