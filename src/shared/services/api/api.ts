import { SERVER_URL } from "@/shared/services/config/api.config";
import {
  getAccessToken,
  removeToken,
} from "@/shared/services/auth/auth-token.service";
import axios, { CreateAxiosDefaults } from "axios";
import { errorCatch } from "./api.hepler";
import { authService, AuthService } from "@/shared/services/auth/auth.service";

const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
};

export const axiosPublic = axios.create(options);

export const axiosAuth = axios.create(options);

axiosAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await authService.getNewTokens();

        return axiosAuth.request(originalRequest); //повторяем запрос c новым токеном
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          removeToken();
        }
      }
    }

    //повторная попытка не удалась или ошибка не связана стокенами
    throw error;
  }
);
