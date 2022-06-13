export default class Account {
	balance = 0;

	constructor (readonly id: string) {
	}

	credit (amount: number) {
		this.balance += amount;
	}

	debit (amount: number) {
		this.balance -= amount;
	}

	getBalance () {
		return this.balance;
	}
}
