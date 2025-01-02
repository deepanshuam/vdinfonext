import React from "react";
import styles from "./styles.module.scss";
import BootStrapModal from "../../Modal";
import Image from 'next/image';
export default function ZCard({ imageSrc, userName, userProfession }) {
  return (
    <div className={styles.card_item}>
      <div className={styles.eff}>
        <div className={styles.client_image}>
          <Image src={imageSrc} alt="Client" />
          <div className={styles.yt_logo}>
            {/* <Image src="/images/logo/yt.png" alt="" /> */}
          </div>
        </div>
        <h5 className={styles.user_name}>{userName}</h5>
        <p className={styles.user_profession}>{userProfession}</p>
        <div className="d-flex justify-content-center">
          <BootStrapModal
            title={"Youtube"}
            link={
              "https://www.youtube.com/embed/pY3WhHALiL0?si=-Zv8ufIU5nt4M1bt?autoplay=1"
            }
          />
        </div>
      </div>
    </div>
  );
}
