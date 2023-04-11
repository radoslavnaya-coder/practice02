import Image from "next/image";
import styles from "@/styles/Videoplace.module.css";

export default function Videoplace() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>{" "}
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>{" "}
        {/*  */}
        <div className={styles.video__div}>
          <Image src="/videoImage.png" width={366} height={214} />
          <h1>Название видеоролика</h1>
          <h3>Канал</h3>
          <p>1 день назад</p>
        </div>{" "}
        
      </section>
    </>
  );
}
