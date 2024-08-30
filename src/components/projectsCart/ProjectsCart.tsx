import type { InferGetStaticPropsType, GetStaticProps } from "next"

import { Repository } from "@/types"
import styles from "./projectsCart.module.scss"

export async function getStaticProps(){
    const res = await fetch("https://api.github.com/users/MatheusRic/repos")
    const repositorys: Repository[] = await res.json()

    return {props: {repositorys}}
}

export default function ProjectsCart({repositorys}: any) {
    console.log(repositorys)
    return <div></div>
}

/* const ProjectsCart = ({repositorys}: any) => {
    console.log("repositorys:", repositorys)


    return <div className={styles.container}>
        {/* <ul className={styles.projects}>
            <div className={styles.leftItens}>
               {repositorys.map((repository) => {
                <h2>{repository.name}</h2>
               })}
            
            </div>
        </ul> */
        /* </div> */

/* export default ProjectsCart */

{/* <h2>{repository.name}</h2>
<p>Linguagens: <span>Javascript</span></p>
<p>kjahsdjh ajsdhjashd lhaklsjhd lkjasl jdkasj dkljasl kdjaskl djlkasj dlkjaslk djklasjd klajs lkdjaklsj kldajskl djklasj kdljaskljd klajskldj ask</p>
<div className={styles.projectButtons}>
    <button className={styles.ghButton}>GitHub Code</button>
    <button className={styles.appButton}>Aplication</button>
</div> */}