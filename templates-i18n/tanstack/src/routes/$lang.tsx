import { createFileRoute, Outlet, notFound, redirect } from "@tanstack/react-router";
import { baseLocale, locales, setLocale } from "@/paraglide/runtime.js";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    const lang = params.lang;

    if (lang === baseLocale) {
      throw redirect({ to: "/" });
    }

    if (!locales.includes(lang as (typeof locales)[number])) {
      throw notFound();
    }

    setLocale(lang as (typeof locales)[number], { reload: false });
  },
  component: Outlet,
});
