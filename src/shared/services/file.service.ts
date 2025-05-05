import { axiosAuth } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { IFile } from "@/shared/types/file";

class FileService {
  async upload(file: FormData, folder?: string) {
    const { data } = await axiosAuth<IFile[]>({
      url: API_URL.files(),
      method: "POST",
      data: file,
      params: {
        folder,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  }
}

export const fileService = new FileService();
