class ATM {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    checkBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }
}

// Example usage
const atm = new ATM(100); // Initial balance is 100

atm.checkBalance();  // 100
atm.deposit(50);     // Deposited 50. New balance is 150.
atm.withdraw(20);    // Withdrew 20. New balance is 130.
atm.withdraw(200);   // Insufficient funds.