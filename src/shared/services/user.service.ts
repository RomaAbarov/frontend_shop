import { axiosAuth } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { IUser } from "@/shared/types/user";

class UserService {
  async getProfile() {
    const { data } = await axiosAuth<IUser>({
      url: API_URL.users("profile"),
      method: "GET",
    });

    return data;
  }

  async toggleFavorite(productId: string) {
    const { data: toggledFavorite } = await axiosAuth<IUser>({
      url: API_URL.users(`profile/favorites/${productId}`),
      method: "PATCH",
    });

    return toggledFavorite;
  }
}

export const userService = new UserService();
