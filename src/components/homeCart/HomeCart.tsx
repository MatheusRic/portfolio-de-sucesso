import styles from "./homeCart.module.scss"
import Image from "next/image"

const HomeCart = () => {
    return <div className={styles.container}>
        <div className={styles.helloDiv}>
            <div className={styles.infoDiv}>
                <div className={styles.avatar}>
                    <Image className={styles.myImg} src="/myImg.jpeg" alt="" width={68} height={70}/>
                    <h3>Hello, My name is Matheus</h3>
                </div>
                <h1>I <span>love</span> creating and <span>developing</span> projects</h1>
                <p>Discover here in this environment, created especially for you, all my projects and technologies</p>
                <div className={styles.buttons}>
                    <button className={styles.projectsButton}><a href="https://github.com/MatheusRic?tab=repositories" target="blank">See Projects</a></button>
                    <Image src="/github.png" alt="" width={48} height={48}/>
                 </div>
            </div>
            <div className={styles.imgTech}>
                <Image src="/html.svg" alt="" width={50} height={53}/>
                <Image src="/css.svg" alt="" width={50} height={53}/>
                <Image src="/js.png" alt="" width={50} height={53}/>
                <Image src="/node.svg" alt="" width={50} height={53}/>
                <Image src="/react.svg" alt="" width={50} height={53}/>
            </div>
        </div>
    </div>
}

export default HomeCart