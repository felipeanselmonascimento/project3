import planofundo1 from '../assets/capa fundo.jpg'
// import Longgoose1 from '../assets/face.png'
// import { Maximizar } from './Maximizar'
import styles from './Section1.module.css'

export function Section1() {
    return (
        <section className={styles.sectionn}>
                <img src={planofundo1} alt="plano de fundo section1" />
                <div className={styles.container}>
                    {/* <h1>Baby King Bonk</h1> */}
                    {/* <div className={styles.img2}>
                        <Maximizar src={Longgoose1} />
                        <img src={Longgoose1} alt="long goose da 1 section" />
                    </div> */}
                </div>
        </section>
    )
}