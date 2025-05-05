import Cookie from "js-cookie";

export enum EnumTokens {
  "ACCESS_TOKEN" = "access_token",
  "REFRESH_TOKEN" = "refresh_token",
}

export function getAccessToken() {
  const accessToken = Cookie.get(EnumTokens.ACCESS_TOKEN);

  return accessToken || null;
}

export function saveToken(accessToken: string) {
  Cookie.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.APP_DOMAIN,
    sameSite: "Strict",
    expires: 1,
  });
}

export function removeToken() {
  Cookie.remove(EnumTokens.ACCESS_TOKEN);
}
