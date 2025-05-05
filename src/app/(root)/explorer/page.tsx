import { productService } from "@/shared/services/product.service";
import { Metadata } from "next";
import { Explorer } from "./Explorer";

export const metadata: Metadata = {
  title: "Каталог товаров",
};

export const revalidate = 60;

async function getProducts() {
  const data = await productService.getAll();

  return data;
}

export default async function page() {
  const products = await getProducts();

  return <Explorer products={products} />;
}
