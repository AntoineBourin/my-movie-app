import Genres from "@/components/genres/Genres";
import Popular from "@/components/popular/Popular";
import styles from "./page.module.css";

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
