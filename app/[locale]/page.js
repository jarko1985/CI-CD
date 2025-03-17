
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const lang = useLocale();
  const t = useTranslations('HomePage')
  return (
      <section className="h-screen mx-auto bg-amber-50 dark:bg-black">
        <h1 className="text-2xl text-center pt-5 text-black dark:text-white">{t('title')}</h1>
      </section>
  );
}
