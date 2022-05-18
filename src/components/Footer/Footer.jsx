import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <code className={styles.text}>©2022 Tip Calculator</code>
        </footer>
    );
}

export default Footer;