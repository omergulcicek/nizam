import { useRouter } from "@tanstack/react-router";
import { getLocale, localizeUrl, setLocale } from "@/paraglide/runtime.js";

export function LanguageSwitcher() {
  const router = useRouter();
  const currentLang = getLocale();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "en" | "tr";
    const target = localizeUrl(window.location.href, { locale: nextLocale });

    setLocale(nextLocale, { reload: false });
    void router.navigate({
      to: `${target.pathname}${target.search}${target.hash}`,
      replace: true,
    });
  };

  return (
    <div className="relative">
      <select
        value={currentLang}
        onChange={onChange}
        className="h-10 cursor-pointer appearance-none rounded-md border border-input bg-background pl-3 pr-8 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
      >
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
      <div className="pointer-events-none absolute right-2.5 top-[11px] h-4 w-4 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
}
