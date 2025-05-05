import { profileApi } from "@/shared/services/api/profileApi";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  const { data: user, isLoading } = useQuery({
    ...profileApi.getProfile(),
  });

  return { user, isLoading };
}
