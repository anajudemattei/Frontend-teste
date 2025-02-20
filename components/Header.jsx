import styles from '../styles/Header.module.css';

export default function Header() {
    return (
    <header className={styles.header}>
        <h1 className={styles.title}>Friend Bear</h1>
    </header>
    );
}