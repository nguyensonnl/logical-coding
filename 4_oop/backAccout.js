class BackAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Amount ${amount} deposited into account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Amount ${amount} withdraw from account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient balance in accont ${this.accountNumber}`);
    }
  }

  displayBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  }
}

let account1 = new BackAccount("01", "Ngọc Huyền", 2000);
account1.deposit(1000);
account1.displayBalance();
account1.withdraw(2000);
account1.displayBalance();
