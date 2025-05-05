import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <Header />
        <main className="mx-5 lg:mx-14">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
