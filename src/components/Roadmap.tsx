import img from '../assets/3 luffy.png'
import styles from './Roadmap.module.css'

export function Roadmap() {
    return (
        <div className={styles.div}>
            <img src={img}
                alt="imagem do roadmap img" />
            <h2>ROADMAP</h2>
            <p className={styles.para}>Welcome to the exciting journey of Monkey D PEPE ($mPEPE)! Our roadmap is a comprehensive guide outlining the strategic vision and key milestones for the development and growth of our cryptocurrency.</p>
            <p className={styles.para}>Whether you're a crypto veteran or a curious newcomer, this project promises an exciting fusion of meme culture and blockchain technology, setting the stage for an unforgettable adventure to the moon and beyond.</p>
            <div className={styles.phases}>
                <div className={styles.filho1}
                data-aos="fade-right"
                data-aos-duration="1000">
                    <div className={styles.phase}>
                        <h1>PHASE 1</h1>
                        <p>Initial Marketing</p>
                        <p>Website Development</p>
                        <p>Contract Deployment</p>
                        <p>Launch on PancakeSwap</p>
                    </div>
                    <div className={styles.phase}>
                        <h1>PHASE 2</h1>
                        <p>Coinmarketcap Listing</p>
                        <p>CoinGecko Listing</p>
                        <p>Dextool Listing</p>
                        <p>10,000+ Holders</p>
                    </div>
                </div>
                <div className={styles.filho2}
                data-aos="fade-left"
                data-aos-duration="1000">
                    <div className={styles.phase}>
                        <h1>PHASE 3</h1>
                        <p>Token Burn</p>
                        <p>Partnerships and Sponsorships</p>
                        <p>Related Policies</p>
                        <p>Gam release</p>
                    </div>
                    <div className={styles.phase}>
                        <h1>PHASE 4</h1>
                        <p>Globalization</p>
                        <p>Mass Marketing</p>
                        <p>CEXs Listing</p>
                        <p>20,000+ Holders</p>
                    </div>
                </div>

            </div>
        </div>
    )
}