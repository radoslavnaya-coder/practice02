import Image from "next/image";
import styles from "@/styles/Menu.module.css";

export default function Menu() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.menu__buttonActive}>
          <Image 
          src="/home-white.png" 
          width={23} 
          height={25} />{" "}
          <p className={styles.menu__buttonScriptActive}> Главная </p>{" "}
        </div>{" "}
        <div className={styles.menu__button}>
          <Image 
          src="/like-linear.png" 
          width={23} 
          height={21} />{" "}
          <p className={styles.menu__buttonScript}> Понравившееся </p>{" "}
        </div>{" "}
        <div className={styles.menu__button}>
          <Image 
          src="/video-linear.png" 
          width={25} 
          height={18.19} />{" "}
          <p className={styles.menu__buttonScript}> Мои видео </p>{" "}
        </div>{" "}
        <div className={styles.menu__button}>
          <Image 
          src="/plus-linear.png" 
          width={23} 
          height={23} />{" "}
          <p className={styles.menu__buttonScript}> Добавить </p>{" "}
        </div>{" "}
        <hr />
        <div className={styles.descriptionReg}>
          <Image 
          src="/account.png" 
          width={23} 
          height={23} />
          {" "}
          <input type="submit" value="Войти" className={styles.reg__button} />{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
