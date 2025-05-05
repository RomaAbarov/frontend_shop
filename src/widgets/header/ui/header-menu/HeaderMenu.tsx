"use client";

import { useProfile } from "@/shared/hooks/queries/useProfile";
import { DASHBOARD_URL, PUBLIC_URL } from "@/shared/services/config/url.config";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { HeaderCard } from "@/features/header-card";

export function HeaderMenu() {
  const { user, userIsLoading } = useProfile();

  return (
    <div className="hidden items-center gap-x-2 ml-auto lg:flex">
      <HeaderCard />
      <Link href={PUBLIC_URL.explorer()}>
        <Button variant="ghost">Каталог</Button>
      </Link>
      {userIsLoading ? (
        <div>Loading...</div>
      ) : user ? (
        <>
          <Link href={DASHBOARD_URL.favorites()}>
            <Button variant="ghost">Избранное</Button>
          </Link>
          <Link href={DASHBOARD_URL.home()}>
            <Image
              src={user.picture}
              alt={user.name}
              width={42}
              height={42}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link href={PUBLIC_URL.auth()}>
          <Button>
            <LogOutIcon className="size-4 mr-2" />
            Войти
          </Button>
        </Link>
      )}
    </div>
  );
}
