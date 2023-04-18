import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "@/styles/Menu.module.css";

export default function Menu() {
  function switcher() {
    switch(window.location.pathname){
      case '/favorites':
        one.style.background = "none";
        two.style.background = "#2e3e3e";
        two.style.borderRadius = "10px";
        three.style.background = "none";
        four.style.background = "none";
        break;
      case '/myvideos':
        one.style.background = "none";
        two.style.background = "none";
        three.style.background = "#2e3e3e";
        three.style.borderRadius = "10px";
        four.style.background = "none";
        break;
      case '/addvideo':
        one.style.background = "none";
        two.style.background = "none";
        three.style.background = "none";
        four.style.background = "#2e3e3e";
        four.style.borderRadius = "10px";
        break;
      case '/':
        one.style.background = "#2e3e3e";
        one.style.borderRadius = "10px";
        two.style.background = "none";
        three.style.background = "none";
        four.style.background = "none";
        break;
    }
    window.onload = switcher;
  }
  return (
    <>
    <Script onLoad = {() => {switcher}} />
      <section className={styles.section}>
        <Link href="/">
          <div onClick={switcher}
            id="one"
            className={styles.menuFirstElement}
          >
            <Image src="/home-white.png" width={23} height={25} />{" "}
            <p className={styles.menu__buttonScript}> Главная </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link  href="/favorites">
          <div onClick={switcher}  id="two" className={styles.menu__button}>
            <Image src="/like-linear.png" width={23} height={21} />{" "}
            <p className={styles.menu__buttonScript}> Понравившееся </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link  href="myvideos">
          <div onClick={switcher}  id="three" className={styles.menu__button}>
            <Image src="/video-linear.png" width={25} height={18.19} />{" "}
            <p className={styles.menu__buttonScript}> Мои видео </p>{" "}
          </div>{" "}
        </Link>{" "}
        <Link href="addvideo">
          <div onClick={switcher}  id="four" className={styles.menu__button}>
            <Image src="/plus-linear.png" width={23} height={23} />{" "}
            <p className={styles.menu__buttonScript}> Добавить </p>{" "}
          </div>{" "}
        </Link>{" "}
        <hr />
        <div className={styles.descriptionReg}>
          <Image src="/menuAccount.png" width={23} height={23} />{" "}
          <input type="submit" value="Войти" className={styles.reg__button} />{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
  }
