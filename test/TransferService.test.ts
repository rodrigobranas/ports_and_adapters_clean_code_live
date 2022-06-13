import Account from "../src/Account";
import TransferService from "../src/TransferService";

test("Deve transferir entre duas contas", function () {
	const from = new Account("897654");
	from.credit(100);
	const to = new Account("765432");
	const transferService = new TransferService();
	const amount = 50;
	transferService.transfer(from, to, amount);
	expect(from.getBalance()).toBe(50);
	expect(to.getBalance()).toBe(50);
});