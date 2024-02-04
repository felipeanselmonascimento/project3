import styles from './Tokenomics.module.css'
import img from '../assets/another luffy.png'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export function Tokenomics () {

    useEffect(() => {
        AOS.init()
    }, [])
    
    return (
        <div className={styles.div}>
            <img src={img}
            alt="tokenomics img"
            data-aos="zoom-in-down"
            data-aos-duration="3000"/>
            <h2>TOKENOMICS</h2>
            <h1>100,000,000 $mPEPE</h1>
            <h1>TOTAL SUPPLY</h1>
            <p>Monkey D PEPE is designed to be a stable cryptocurrency that encourages long-term community participation. Its primary goal is to promote stability and sustainable growth by rewarding token holders who choose to keep their stakes for extended periods.</p>
            <div className={styles.tokens}>
                {/* <div className={styles.tokenon}>
                    <p>BURNT 5%</p>
                </div> */}
                <div className={styles.tokenon}>
                    <p
                    data-aos="fade-right"
                    data-aos-duration="1000">MARKETING 5%</p>
                </div>
                {/* <div className={styles.tokenon}>
                    <p>VESTED 10%</p>
                </div> */}
                <div className={styles.tokenon}>
                    <p
                    data-aos="fade-left"
                    data-aos-duration="1000">TAX 5/5</p>
                </div>
            </div>
        </div>
    )
}