import Genres from "@/components/genres/Genres";
import Popular from "@/components/popular/Popular";
import styles from "./page.module.css";
import { availableLocales } from "@/utils/i18n";

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default async function Home(props) {
  const { locale } = await props.params;

  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
