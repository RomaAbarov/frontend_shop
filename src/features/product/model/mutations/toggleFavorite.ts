import { profileApi } from "@/shared/services/api/profileApi";
import { queryClient } from "@/shared/services/api/query-client";
import { userService } from "@/shared/services/user.service";
import { useMutation } from "@tanstack/react-query";

export function toggleFavorite(productId: string) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => userService.toggleFavorite(productId),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [profileApi.basekey] }),
  });

  return { mutate, isPending };
}
