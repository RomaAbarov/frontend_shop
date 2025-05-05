import { axiosAuth, axiosPublic } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { ICategory, ICategoryInput } from "@/shared/types/category";

class CategoryService {
  async getById(id: string) {
    const { data } = await axiosPublic<ICategory>({
      url: API_URL.categories(`${id}`),
      method: "GET",
    });

    return data;
  }

  async createCategory(data: ICategoryInput) {
    const { data: createdCategory } = await axiosAuth<ICategory>({
      url: API_URL.categories(),
      method: "POST",
      data,
    });

    return createdCategory;
  }

  async updateCategory(id: string, data: ICategoryInput) {
    const { data: updatedCategory } = await axiosAuth<ICategory>({
      url: API_URL.categories(`${id}`),
      method: "PUT",
      data,
    });

    return updatedCategory;
  }

  async deleteCategory(id: string) {
    const { data: deletedCategory } = await axiosAuth<ICategory>({
      url: API_URL.categories(`${id}`),
      method: "DELETE",
    });

    return deletedCategory;
  }
}

export const categoryService = new CategoryService();
