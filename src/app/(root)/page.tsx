import { Metadata } from "next";
import { productService } from "@/shared/services/product.service";
import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { Hero } from "@/widgets/hero";
import { Catalog } from "@/shared/components/ui";

export const metadata: Metadata = {
  title: "ваш шопинг",
};

export const revalidate = 60;

async function getProducts() {
  const data = (await productService.getMostPopularsProducts()).slice(0, 6);

  return data;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <Catalog
        title="Хиты продаж"
        description="Самые популярные товары нашего магазина."
        linkTitle="Узнать больше"
        link={PUBLIC_URL.explorer()}
        products={products}
      />
    </>
  );
}
