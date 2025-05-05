import { PUBLIC_URL } from "@/shared/services/config/url.config";
import { SITE_NAME } from "@/shared/consts/seo.consts";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href={PUBLIC_URL.home()}
      className="flex items-center gap-x-3 hover:opacity-75 transition-opacity"
    >
      {/* <Image src="" alt={SITE_NAME} width={35} height={35} /> */}
      <div>{SITE_NAME}</div>
    </Link>
  );
}
