import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>TIP CALCULATOR</h1>
            <code className={styles.tagLine}>Build in React</code>
        </header>
    );
}

export default Header;