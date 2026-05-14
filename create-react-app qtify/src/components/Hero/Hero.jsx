import styles from "./Hero.module.css";
import headphone from "../../assets/vibrating-headphone1.png";

function Hero() {
  return (
    <section className={styles.hero}>
            <div className={styles.text}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div className={styles.image}>
                <img src={headphone} alt="headphone" />
            </div>
    </section>
  );
}

export default Hero;