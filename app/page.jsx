import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
    return(
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                </div>
                <div className={styles.foto}>
                    <img src="/adc522c5cb8cda2f05d80dc15be271a8-removebg-preview.png" alt="friend bear" className={styles.image} />
                </div>
            </main>
            <Footer />
        </div>
    );
}