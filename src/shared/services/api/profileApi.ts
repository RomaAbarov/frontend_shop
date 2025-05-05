import { queryOptions } from "@tanstack/react-query";
import { userService } from "../user.service";

export const profileApi = {
  basekey: "profile",

  getProfile: () => {
    return queryOptions({
      queryKey: [profileApi.basekey],
      queryFn: () => userService.getProfile(),
    });
  },
};
