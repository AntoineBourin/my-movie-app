"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import styles from "./SearchSidebar.module.scss";
import Form from "./form/Form";

const SearchSidebar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSidebarTitle = () => {
    if (!segment) {
      return "Films";
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();
  return (
    <div className={styles.sidebar}>
      <h1>Tous les &quot;{title}&quot;</h1>
      <Form />
    </div>
  );
};

export default SearchSidebar;
