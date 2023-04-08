import MediaCard from "@/components/media-card/MediaCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard />
    </div>
  );
}
