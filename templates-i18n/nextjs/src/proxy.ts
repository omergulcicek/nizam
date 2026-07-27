import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for api, trpc, _next, _vercel, and static files
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
