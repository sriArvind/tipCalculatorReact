import styles from './Table.module.css';

const Table = ({ info }) => {

    const tableItems = info.map((item, index) => (
        <tr key={index} className={styles.tr}>
            <td className={styles.padding}>{index + 1}</td>
            <td className={styles.padding}>{item.customerName}</td>
            <td className={styles.padding}>{item.billAmount}</td>
            <td className={styles.padding}>{item.serviceRating}</td>
            <td className={styles.padding}>{item.tipAmount}</td>
        </tr>
    ));

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <th className={styles.padding}>Sl.No</th>
                    <th className={styles.padding}>Customer Name</th>
                    <th className={styles.padding}>Bill Amount</th>
                    <th className={styles.padding}>Service Rating</th>
                    <th className={styles.padding}>Tip Amount</th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    );
};

export default Table;