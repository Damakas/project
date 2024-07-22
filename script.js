'use strict'

class BankAcc {
    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    get owner() {
        return this._owner
    }

    set owner(name) {
        if (name > 0) {
            this._owner = name;
        } else {
            console.log('Поле не может быть пустым');
        }
    }

    get balance() {
        return this._balance
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`На ваш счет зачислено ${amount}`)
        } else {
            console.log('Неккоректно введена сумма')
        }
    }

    windraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`С вамшего счета снято ${amount}`)
        } else {
            console.log('Недостаточно средств на счету')
        }
    }
}

let newBalance = new BankAcc('Jora', 500);
newBalance.deposit(500)
newBalance.windraw(999)
newBalance.windraw(300)
console.log(newBalance)

