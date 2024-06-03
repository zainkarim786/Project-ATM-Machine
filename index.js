var ATM = /** @class */ (function () {
    function ATM(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    ATM.prototype.checkBalance = function () {
        return this.balance;
    };
    ATM.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance is ").concat(this.balance, "."));
    };
    ATM.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log("Withdrew ".concat(amount, ". New balance is ").concat(this.balance, "."));
    };
    return ATM;
}());
// Example usage
var atm = new ATM(100); // Initial balance is 100
atm.checkBalance(); // 100
atm.deposit(50); // Deposited 50. New balance is 150.
atm.withdraw(20); // Withdrew 20. New balance is 130.
atm.withdraw(200); // Insufficient funds.
