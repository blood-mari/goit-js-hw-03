/*
Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const newTransaction = {
            id: this.transactions.length,
            amount,
            type,
        };

        this.transactions.push(newTransaction);

        console.log(this.transactions);

        return (newTransaction);
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, Transaction.DEPOSIT);

        return (`Счет пополнен на ${amount}\$`);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        let message = 'Ошибка: недостаточно средств';

        if (this.balance >= amount) {
            this.balance -= amount;
            this.createTransaction(amount, Transaction.WITHDRAW);
            message = `Со счета снято ${amount}\$ средств. Осталось ${this.balance}\$. Операция завершена`;
        }
        return (message);
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        let message = `Ваш баланс: ${this.balance}\$`
        return message;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {

        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].id === id) {
                return this.transactions[i];
            }
        }
        return false;
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].type === type) {
                total += this.transactions[i].amount;
            }
        }
        return (`Общая сумма операций ${type}: ${total}\$`);
    },
};

// console.log(account.createTransaction(100, Transaction.DEPOSIT));
//Маша - каша!
console.log(account.deposit(100));
//Счет пополнен на 100

console.log(account.withdraw(22));
//Со счета снято 22

console.log(account.getBalance());
// Баланс: 28

console.log(account.withdraw(7));
// Со счета снято 7

console.log(account.getTransactionDetails(3));
// { id: 2, type: "withdraw", amount: 7 }

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// Транзакций deposit на сумму 50

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//Транзакций withdraw на сумму 29