import { Catalog } from "@/shared/components/ui/catalog/Catalog";
import { APP_URL } from "@/shared/services/config/url.config";
import { categoryService } from "@/shared/services/category.service";
import { productService } from "@/shared/services/product.service";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

async function getProducts(id: string) {
  const products = await productService.getByCategoryId(id);

  const category = await categoryService.getById(id);

  return { products, category };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { products, category } = await getProducts(id);

  return {
    metadataBase: new URL(`${APP_URL}`),
    title: category.title,
    description: category.description,
    openGraph: {
      images: [
        {
          url: products[0].images[0],
          width: 1000,
          height: 1000,
          alt: category.title,
        },
      ],
    },
  };
}

export default async function page({ params }: Props) {
  const { id } = await params;
  const { category, products } = await getProducts(id);

  return (
    <div className="my-6">
      <Catalog
        title={category.title}
        description={category.description}
        products={products}
      />
    </div>
  );
}
