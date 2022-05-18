import styles from './Rating.module.css';

const Rating = ({ value, changeHandler }) => {
    return (
        <>
            <div>
                <label className={styles.customLabel}>How was the service?</label>
            </div>
            <div>
                <select value={value} className={styles.customInput} onChange={changeHandler}>
                    <option value="excellent">Excellent - 20%</option>
                    <option value="medium">Medium - 10%</option>
                    <option value="average">Not so good - 5%</option>
                </select>
            </div>
        </>
    );
}

export default Rating;