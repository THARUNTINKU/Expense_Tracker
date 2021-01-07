import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionHistory = () => {
    // @desc http request useEffect hooks needed
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <React.Fragment>
            <h3>Transaction History</h3>
            <ul id='list' className='list'>
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction._id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};
