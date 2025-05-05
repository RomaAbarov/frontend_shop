import { IProduct } from "@/shared/types/product";

export interface ICatalog {
  title: string;
  description?: string;
  link?: string;
  linkTitle?: string;
  products: IProduct[];
}
