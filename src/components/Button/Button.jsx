import styles from './Button.module.css';

const Button = ({ clickHandler, value }) => {

    let style;
    if (value === "Add Customer") style = styles.addCustomer;
    if (value === "Calculate Tip") style = styles.calculateTip;

    return (
        <button className={style} onClick={clickHandler}>{value}</button>
    );
}

export default Button;