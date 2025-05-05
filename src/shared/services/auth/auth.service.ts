import { axiosPublic } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { IAuthForm, IAuthResponse } from "@/shared/types/auth";
import { removeToken, saveToken } from "./auth-token.service";

export class AuthService {
  async main(type: "login" | "registration", data: IAuthForm) {
    const response = await axiosPublic<IAuthResponse>({
      url: API_URL.auth(`${type}`),
      method: "POST",
      data,
    });

    if (response.data.access_token) {
      saveToken(response.data.access_token);
    }

    return response;
  }

  async getNewTokens() {
    const response = await axiosPublic<IAuthResponse>({
      url: API_URL.auth("login/access-token"),
      method: "POST",
    });

    if (response.data.access_token) {
      saveToken(response.data.access_token);
    }

    return response;
  }

  async logout() {
    const response = await axiosPublic<boolean>({
      url: API_URL.auth("logout"),
      method: "POST",
    });

    if (response.data) {
      removeToken();
    }

    return response;
  }
}

export const authService = new AuthService();
