import { useState } from 'react';
import styles from './Container.module.css';
import Customer from '../Customer/Customer';
import Bill from '../Bill/Bill';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import Title from '../Title/Title';
import List from '../List/List';
import Table from '../Table/Table';
import Result from '../Result/Result';

const Container = () => {

    const [name, setName] = useState("");
    const [bill, setBill] = useState("");
    const [rating, setRating] = useState("excellent");
    const [list, setList] = useState([]);
    const [result, setResult] = useState({ customers: 0, totalTip: 0 });

    const customerName = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const billAmount = (event) => {
        const value = event.target.value;
        setBill(value);
    };

    const serviceRate = (event) => {
        const value = event.target.value;
        setRating(value);
    };

    const resetInputField = () => {
        setName("");
        setBill("");
        setRating("excellent");
    };

    const addCustomer = () => {

        if (name.trim() && bill) {

            let percentage;
            let tip;

            if (rating === "excellent") percentage = (20 / 100);
            if (rating === "medium") percentage = (10 / 100);
            if (rating === "average") percentage = (5 / 100);

            tip = Math.round(bill * percentage);

            let customerInfo = {
                customerName: name,
                billAmount: bill,
                serviceRating: rating,
                tipAmount: tip
            };

            const items = [...list];
            items.push(customerInfo);
            setList(items);

        }
        else {
            alert("Please Enter Valid Input before Perform this Operation");
        }

        resetInputField();

    }

    const calculateTip = () => {
        const output = { ...result };
        output.customers = list.length;
        output.totalTip = list.reduce((total, person) => total + person.tipAmount, 0);
        setResult(output);
    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <Customer value={name} changeHandler={customerName} />
                <Bill value={bill} changeHandler={billAmount} />
                <Rating value={rating} changeHandler={serviceRate} />
                <Button value="Add Customer" clickHandler={addCustomer} />
            </div>
            <div>
                <Title />
                <List list={list} />
                <Table info={list} />
                <Button value="Calculate Tip" clickHandler={calculateTip} />
                <Result result={result} />
            </div>
        </div>
    );
}

export default Container;