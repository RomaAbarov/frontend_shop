import { Auth } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function AuthPage() {
  return <Auth />;
}
