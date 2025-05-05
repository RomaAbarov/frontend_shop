import { Button } from "@/shared/components/ui/button";
import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { NO_INDEX_PAGE } from "@/shared/consts/seo.consts";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Спасибо за покупку",
  ...NO_INDEX_PAGE,
};

export default function page() {
  return (
    <div className="my-24 py-20 mx-auto text-center flex flex-col items-center max-w-4xl space-y-6">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Спасибо за покупку
      </h1>
      <p className="text-lg text-muted-foreground">
        Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все усилия, чтобы
        доставить ваш заказ как можно скорее.
      </p>
      <Link href={PUBLIC_URL.home()}>
        <Button>
          На главную
          <ArrowRight className="size-4 ml-2 transition-all" />
        </Button>
      </Link>
    </div>
  );
}
