import styles from "@/styles/Category.module.css";


export default function Category(){
    return(
        <>
        <section className={styles.section}>
            <a className={styles.categoryActive}>
               Категория 
            </a>
            <a className={styles.category}>
               Категория 
            </a>
            <a className={styles.category}>
               Категория
            </a>
            <a className={styles.category}>
               Категория 
            </a>
            <a className={styles.category}>
               Категория 
            </a>
        </section>
        </>
    );
}