import { queryClient } from "@/shared/services/api/query-client";
import { authService } from "@/shared/services/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  const { mutate: logout } = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/auth");
    },
  });

  return { logout };
}
