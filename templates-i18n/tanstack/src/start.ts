import { createMiddleware, createStart } from "@tanstack/react-start";

/**
 * Baseline security headers (parity with the Next.js template's `headers()`).
 * Extend or replace when you add CSP / auth middleware.
 */
const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();

  result.response.headers.set("X-Frame-Options", "DENY");
  result.response.headers.set("X-Content-Type-Options", "nosniff");
  result.response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  result.response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware],
}));
