import styles from './Customer.module.css';

const Customer = ({ value, changeHandler }) => {
    return (
        <>
            <div>
                <label className={styles.customLabel}>Enter Name of the Customer</label>
            </div>
            <div>
                <input type="text" placeholder="Customer Name" value={value} className={styles.customInput} onChange={changeHandler} />
            </div>
        </>
    );
}

export default Customer;