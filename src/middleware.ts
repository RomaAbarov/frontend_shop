import { NextResponse, type NextRequest } from "next/server";
import { EnumTokens } from "./shared/services/auth/auth-token.service";
import { PUBLIC_URL } from "./shared/services/config/url.config";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = request.url.includes(PUBLIC_URL.auth());

  if (isAuthPage) {
    if (accessToken || refreshToken) {
      return NextResponse.redirect(new URL(PUBLIC_URL.home(), request.url));
    }

    return NextResponse.next();
  }

  //  /dashboard/:path
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth"],
};
