import { NO_INDEX_PAGE } from "@/shared/consts/seo.consts";
import { Metadata } from "next";
import { Favorites } from "./Favorites";

export const metadata: Metadata = {
  title: "Избранное",
  ...NO_INDEX_PAGE,
};

export default function page() {
  return <Favorites />;
}
