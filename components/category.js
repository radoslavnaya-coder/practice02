import styles from "@/styles/Category.module.css";
const videoCategory = ["Категория"];

export default function Category() {
  return (
    <>
      <section className={styles.section}>
        {videoCategory.map((category) => (
          <a className={styles.category}>{category}</a>
        ))}
        <a className={styles.category}>Категория</a>
        <a className={styles.category}>Категория</a>
        <a className={styles.category}>Категория</a>
        <a className={styles.category}>Категория</a>
      </section>
    </>
  );
}
