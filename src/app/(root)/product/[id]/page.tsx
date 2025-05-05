import { APP_URL } from "@/shared/services/config/url.config";
import { productService } from "@/shared/services/product.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Product } from "../../../../features/product/ui/Product";

type Props = {
  params: Promise<{ id: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await productService.getAll();

  return products.map((product) => ({
    params: { id: product.id },
  }));
}

async function getProducts(id: string) {
  try {
    const product = await productService.getById(id);

    const similarProducts = await productService.getSimilarProducts(id);

    return { similarProducts, product };
  } catch (error) {
    return notFound();
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { product } = await getProducts(id);

  return {
    metadataBase: new URL(`${APP_URL}`),
    title: product.title,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.images[0],
          width: 1000,
          height: 1000,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function page({ params }: Props) {
  const { id } = await params;
  const { product, similarProducts } = await getProducts(id);

  return (
    <Product
      initialProduct={product}
      similarProducts={similarProducts}
      id={id}
    />
  );
}
