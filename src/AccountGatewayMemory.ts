import Account from "./Account";
import AccountGateway from "./AccountGateway";

export default class AccountGatewayMemory implements AccountGateway {
	accounts: Account[] = [];

	constructor () {
	}

	async get(id: string): Promise<Account> {
		const account = this.accounts.find(account => account.id === id);
		if (!account) throw new Error();
		return account;
	}

	async save(account: Account): Promise<void> {
		this.accounts.push(account);
	}

	async update(account: Account): Promise<void> {
		const existingAccount = await this.get(account.id);
		existingAccount.balance = account.getBalance();
	}
}
