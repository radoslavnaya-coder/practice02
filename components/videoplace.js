import Image from "next/image";
import styles from "@/styles/Videoplace.module.css";

const videoPreviewImage = ["/videoImage.png"];
const videoChannelImage = ["/accountImage.png"];
const videoName = ["Название видеоролика"];
const videoChannel = ["Канал"];
const videoDate = ["1 день назад"];

export default function Videoplace() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.video__div}>
          {videoPreviewImage.map((videoPrIm) => (
            <Image
              className={styles.videoImage}
              src={videoPrIm}
              width={366}
              height={214}
            />
          ))}
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              {videoChannelImage.map((videoChIm) => (
                <Image src={videoChIm} width={40} height={40} />
              ))}
            </div>
            <div>
              {videoName.map((videoItem) => (
                <h1 className={styles.videoplaceH1}>{videoItem}</h1>
              ))}
              {videoChannel.map((videoCh) => (
                <h3 className={styles.videoplaceH3}>{videoCh}</h3>
              ))}
              {videoDate.map((videoD) => (
                <p className={styles.videoplaceP}>{videoD}</p>
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>{" "}
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>{" "}
        {/*  */}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>{" "}
        <div className={styles.video__div}>
          <Image
            className={styles.videoImage}
            src="/videoImage.png"
            width={366}
            height={214}
          />
          <div className={styles.videoplaceDescription}>
            <div className={styles.accountImage}>
              <Image src="/accountImage.png" width={40} height={40} />
            </div>
            <div>
              <h1 className={styles.videoplaceH1}>Название видеоролика</h1>
              <h3 className={styles.videoplaceH3}>Канал</h3>
              <p className={styles.videoplaceP}>1 день назад</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <script>
  const video = arr.map(function callback( currentValue[, index[, array]]){" "}
  {
    // Возвращает элемент
  }
  [, thisArg])
</>; */
}
