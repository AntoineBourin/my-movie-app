"use client";
import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.scss";

const LogoutButton = () => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default LogoutButton;
