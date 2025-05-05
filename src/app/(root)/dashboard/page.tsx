import { Metadata } from "next";
import { Dashboard } from "./Dashboard";
import { NO_INDEX_PAGE } from "@/shared/consts/seo.consts";

export const metadata: Metadata = {
  title: "Личный кабинет",
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return <Dashboard />;
}
