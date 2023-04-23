import MediaCard from "@/components/media-card/MediaCard";
import Popular from "@/components/popular/Popular";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
}
