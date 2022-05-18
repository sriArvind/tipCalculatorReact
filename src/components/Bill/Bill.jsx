import styles from './Bill.module.css';

const Bill = ({ value, changeHandler }) => {
    return (
        <>
            <div>
                <label className={styles.customLabel}>Enter Your Bill Amount</label>
            </div>
            <div>
                <input type="number" placeholder="Bill Amount" value={value} className={styles.customInput} onChange={changeHandler} />
            </div>
        </>
    );
}

export default Bill;