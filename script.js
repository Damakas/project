'use strict'

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
        .map(item => item.amount)
        .reduce((acc, current) => {
            return acc + current
        })

};

console.log(getPositiveIncomeAmount(funds))


const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, current) => acc + current.amount, 0) : getPositiveIncomeAmount(data);
}


console.log(getTotalIncomeAmount(funds))