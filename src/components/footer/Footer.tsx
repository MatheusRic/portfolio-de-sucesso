import styles from "./footer.module.scss"
import Image from "next/image"

const Footer = () => {
    return <div className={styles.container}>
        <div className={styles.leftSide}>
        <Image className={styles.myImg} src="/myImg.jpeg" alt="" width={69} height={69}/>
        <div className={styles.bye}>
            <h3>Thank You</h3>
            <h4>Fallow me on my social networks and let s talk</h4>
        </div>
        </div>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="" width={48} height={48}/>
            <Image src="/instagram.png" alt="" width={48} height={48}/>
            <Image src="/linkedin.png" alt="" width={48} height={48}/>
        </div>
    </div>
}

export default Footer