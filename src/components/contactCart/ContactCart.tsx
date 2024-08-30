import styles from "./contactCart.module.scss"
import Image from "next/image"

const ContactCart = () => {
    return <div className={styles.container}>
        <div className={styles.infos}>
            <h2>Let s set up a conversation and <span>develop our creativity</span> together?</h2>
            <p>Advertise your brand organically within Dribble s design inspiration feed</p>
        </div>
        <div className={styles.contacts}>
            <ul>
                <li>
                    <Image src="/wp.png" alt="" width={68} height={70}/>
                    <div className={styles.social}>
                        <h3>My phone</h3>
                        <p>i`m available for a voice chat, lets about creativity together?</p>
                        <button><a href="https://wa.me/5512996569120" target="blank">call now</a></button>
                    </div>
                </li> 
                <li>
                    <Image src="/mail.png" alt="" width={68} height={70}/>
                    <div className={styles.social}>
                        <h3>My mail</h3>
                        <p>i`m available for a voice chat, lets about creativity together?</p>
                        <button><a href="mailto:matheu_ric99@hotmail.com" target="blank">contact me</a></button>
                    </div>
                </li> 
                <li>
                    <Image src="/lkd.png" alt="" width={68} height={70}/>
                    <div className={styles.social}>
                        <h3>My linkedin</h3>
                        <p>i`m available for a voice chat, lets about creativity together?</p>
                        <button><a href="https://www.linkedin.com/in/matheusricardopb/" target="blank">conect me</a></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>

}

export default ContactCart