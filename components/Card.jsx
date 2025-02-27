import styles from '../styles/Card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.column}>
                <p className={styles.title}>Personalidade Amigável</p>
                <p>Friend Bear é conhecido por sua personalidade amigável e sempre está disposto a ajudar seus amigos em qualquer situação.</p>
            </div>
            <div className={styles.column}>
                <p className={styles.title}>Habilidades Especiais</p>
                <p>Friend Bear tem a habilidade especial de criar um ambiente acolhedor e seguro, fazendo com que todos se sintam bem-vindos.</p>
            </div>
            <div className={styles.column}>
                <p className={styles.title}>História e Origem</p>
                <p>Friend Bear faz parte da família Care Bears e foi criado para promover a amizade e o companheirismo entre todos.</p>
            </div>
        </div>
    );
};