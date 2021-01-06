import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);

    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    const income = amounts
        .filter((currAmount) => currAmount > 0)
        .reduce((total, currAmount) => (total += currAmount), 0)
        .toFixed(2);

    const expense = amounts
        .filter((currAmount) => currAmount < 0)
        .reduce((total, currAmount) => (total += currAmount), 0)
        .toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>${expense}</p>
            </div>
        </div>
    );
};
