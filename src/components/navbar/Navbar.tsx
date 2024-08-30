"use client"
import Link from "next/link"
import styles from"./navbar.module.scss"
import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
    const [open,setOpen] = useState(false);

    return <div className={styles.container}>
            <div className={styles.logo}>Matheus</div>
            <div className={styles.linkContainer}>
            <div className={styles.links}>
                <Link href="">Home</Link>
                <Link href="">Projects</Link>
                <Link href="">Contact</Link>
                <Link href="">Social Midia</Link>
            </div>
            <button className={styles.navButton} onClick={()=>setOpen((prev) => !prev)}><Image src="/menu.png" alt="" width={48} height={48}/></button>
            {
                open && <div className={styles.mobileLinks}>
                    <Link href="">Home</Link>
                    <Link href="">Projects</Link>
                    <Link href="">Contact</Link>
                    <Link href="">Social Midia</Link>
          
                </div>
            }
            </div>
        </div>
}

export default Navbar