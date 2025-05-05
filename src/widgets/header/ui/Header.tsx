import { Search } from "@/features/search";
import { Logo } from "@/shared/components/ui";
import { HeaderMenu } from "./header-menu/HeaderMenu";

export function Header() {
  return (
    <div className="p-5 gap-x-4 h-full flex items-center bg-white border-b">
      <Logo />
      <div className="ml-auto hidden w-[40%] lg:block">
        <Search />
      </div>
      <HeaderMenu />
    </div>
  );
}
