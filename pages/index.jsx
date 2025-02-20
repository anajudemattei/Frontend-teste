import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
    return(
        <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.cards}>
                <Card />    
                <Card />
                <Card />
            </div>
                <div className={styles.foto}>
                 <img class = "img-container" src="/adc522c5cb8cda2f05d80dc15be271a8.jpg" alt="friend bear" />
            </div>
            </main>
        </div>
    );
};