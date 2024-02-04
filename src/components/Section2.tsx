// import section22 from '../assets/darkforest.jpg'
import styles from './Section2.module.css'
import dedao from '../assets/luffy.png'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import { Copy } from '@phosphor-icons/react'

export function Section2() {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      // Texto que você deseja copiar
      const textToCopy = 'Monkey D PEPE';
  
      // Copia o texto para a área de transferência
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Atualiza o estado para exibir o aviso
          setIsCopied(true);
  
          // Define um temporizador para esconder o aviso após alguns segundos
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error('Erro ao copiar para a área de transferência', error);
        });
    };


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={styles.section2}>
            {/* <img src={section22} alt="section2 img" /> */}
            <div className={styles.divi}>
                <img
                src={dedao}
                alt="dedo do meio"
                data-aos="fade-right"
                data-aos-duration="1000"
                />
                {isCopied && <p className={styles.text}>CONTRACT COPIED!</p>}
                <div className={styles.divsec}>
                    <h1
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    >Monkey D PEPE!</h1>
                    <p>Monkey D Pepe, the latest sensation in the blockchain realm, has emerged as a vibrant and innovative project set to redefine the NFT landscape. Combining the iconic Pepe meme culture with the revolutionary potential of the Ethereum blockchain, 佩佩 Pepe promises an exhilarating journey for both crypto enthusiasts and meme aficionados alike</p>
                    <button onClick={handleCopyClick} role="button">CONTRACT:under construction
                    <Copy size={15} /></button>
                </div>
            </div>
        </div>
    )
}