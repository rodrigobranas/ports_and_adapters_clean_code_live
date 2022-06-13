import Account from "./Account";

export default interface  AccountGateway {
	get (id: string): Promise<Account>;
	save (account: Account): Promise<void>;
	update (account: Account): Promise<void>;
}
