import { axiosAuth } from "@/shared/services/api/api";
import { API_URL } from "@/shared/services/config/api.config";
import { IReview, IReviewInput } from "@/shared/types/review";

class ReviewService {
  async createReview(data: IReviewInput, productId: string) {
    const { data: createdReview } = await axiosAuth<IReview>({
      url: API_URL.reviews(`${productId}`),
      method: "POST",
      data,
    });

    return createdReview;
  }

  async deleteProduct(id: string) {
    const { data: deletedReview } = await axiosAuth<IReview>({
      url: API_URL.reviews(`${id}`),
      method: "DELETE",
    });

    return deletedReview;
  }
}

export const reviewService = new ReviewService();
