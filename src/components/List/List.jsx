import styles from './List.module.css';

const List = ({ list }) => {

    const listItems = list.map((item, index) => (
        <li className={styles.li} key={index}>
            {`${item.customerName} offering a tip of Rs. ${item.tipAmount}`}
        </li>
    ));

    return (
        <ul className={styles.listWrap}>
            {listItems}
        </ul>
    );
}

export default List;