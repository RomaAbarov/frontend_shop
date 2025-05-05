import { axiosAuth, axiosPublic } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { IProduct, IProductInput } from "@/shared/types/product";

class ProductService {
  async getAll(searchTerm?: string | null) {
    const { data } = await axiosPublic<IProduct[]>({
      url: API_URL.products(),
      method: "GET",
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return data || [];
  }

  async getById(id: string) {
    const { data } = await axiosPublic<IProduct>({
      url: API_URL.products(`${id}`),
      method: "GET",
    });

    return data;
  }

  async getByCategoryId(categoryId: string) {
    const { data } = await axiosPublic<IProduct[]>({
      url: API_URL.products(`categoryId/${categoryId}`),
      method: "GET",
    });

    return data;
  }

  async getMostPopularsProducts() {
    const { data } = await axiosPublic<IProduct[]>({
      url: API_URL.products("most-popular"),
      method: "GET",
    });

    return data;
  }

  async getSimilarProducts(id: string) {
    const { data } = await axiosPublic<IProduct[]>({
      url: API_URL.products(`similar/${id}`),
      method: "GET",
    });

    return data;
  }

  async createProduct(data: IProductInput) {
    const { data: createdProduct } = await axiosAuth<IProduct[]>({
      url: API_URL.products(),
      method: "POST",
      data,
    });

    return createdProduct;
  }

  async updateProduct(id: string, data: IProductInput) {
    const { data: updatedProduct } = await axiosAuth<IProduct>({
      url: API_URL.products(`${id}`),
      method: "PUT",
      data,
    });

    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const { data: deletedProduct } = await axiosAuth<IProduct>({
      url: API_URL.products(`${id}`),
      method: "DELETE",
    });

    return deletedProduct;
  }
}

export const productService = new ProductService();
