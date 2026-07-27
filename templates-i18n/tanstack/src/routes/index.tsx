import { createFileRoute } from "@tanstack/react-router";

import { Pending } from "@/components/shared/Pending";
import { LandingPage } from "@/features/landing";
import { baseLocale, setLocale } from "@/paraglide/runtime.js";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    setLocale(baseLocale, { reload: false });
  },
  pendingComponent: Pending,
  component: Home,
});

function Home() {
  return <LandingPage />;
}
