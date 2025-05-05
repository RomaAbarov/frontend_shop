import { IUser } from "./user";

export interface IReview {
  id: string;
  text: string;
  rating: number;
  user: IUser;
  createdAt: string;
}

export interface IReviewInput extends Pick<IReview, "text" | "rating"> {}
