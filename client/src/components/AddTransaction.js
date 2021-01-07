import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const generateID = () => {
        return Math.floor(Math.random() * 100000000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: generateID(),
            text,
            amount: +amount, // Adding + sign turn to Number: parsing string to number
        };
        addTransaction(newTransaction);
        setAmount('');
        setText('');
    };
    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Expense Title</label>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter title...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Enter amount...'
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </React.Fragment>
    );
};
