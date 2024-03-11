import { NextResponse } from "next/server";

export default function middleware(req) {
  const userToken = req.cookies.get("user_token")?.value;
  if (!userToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/customize-coupan",
    "/kyc",
    "/my-wallet",
    "/transaction-history",
    "/profile",
    "/redeem-history",
  ],
};
