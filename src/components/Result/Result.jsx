import styles from './Result.module.css';

const Result = ({ result }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <th className={styles.padding}>Total Customers</th>
                    <th className={styles.padding}>Total Tip Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.padding}>{result.customers}</td>
                    <td className={styles.padding}>{result.totalTip}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Result;