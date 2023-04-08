import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";

const MediaCard = () => {
  return (
    <div className={styles.card}>
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
    </div>
  );
};

export default MediaCard;
