import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Menu.module.css";
import switcher from "../utils/menuSwitcher";

export default function Menu() {
  {switcher}
  return (
    <>
      <section className={styles.section}>
        <Link href="/">
          <div onLoad={switcher}
            id="one"
            className={styles.menuFirstElement}
          >
            <Image src="/home-white.png" width={23} height={25} />{" "}
            <p className={styles.menu__buttonScript}> Главная </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link  href="/favorites">
          <div   id="two" className={styles.menu__button}>
            <Image src="/like-linear.png" width={23} height={21} />{" "}
            <p className={styles.menu__buttonScript}> Понравившееся </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link  href="myvideos">
          <div   id="three" className={styles.menu__button}>
            <Image src="/video-linear.png" width={25} height={18.19} />{" "}
            <p className={styles.menu__buttonScript}> Мои видео </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link href="addvideo">
          <div   id="four" className={styles.menu__button}>
            <Image src="/plus-linear.png" width={23} height={23} />{" "}
            <p className={styles.menu__buttonScript}> Добавить </p>{" "}
          </div>{" "}
        </Link>{" "}
        <hr />
        <div className={styles.descriptionReg}>
          <Image className={styles.menuAccount} src="/menuAccount.png" width={23} height={23} />
          <Image className={styles.menuAccountBlack} src="/menuAccountBlack.png" width={23} height={23} />{" "}
          <input type="submit" value="" className={styles.reg__button} />Войти{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
  }
