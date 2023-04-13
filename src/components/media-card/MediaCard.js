import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

const MediaCard = ({ mediaId }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${mediaId}`}>
        <div className={styles.image}>
          <Image
            src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
            alt="media title"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Creed III</h2>
          <p>Le 01/03/2023</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
