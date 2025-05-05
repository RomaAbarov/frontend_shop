"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/form/input";
import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export function Search() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center relative">
      <Input
        className="rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск товаров"
      />
      <Button
        className="rounded-l-none"
        onClick={() =>
          router.push(PUBLIC_URL.explorer(`searchTerm=${searchTerm}`))
        }
      >
        <SearchIcon className="size-4" />
      </Button>
    </div>
  );
}
