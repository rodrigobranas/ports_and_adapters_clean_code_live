import Account from "../src/Account";
import AccountGatewayDatabase from "../src/AccountGatewayDatabase";
import AccountGatewayMemory from "../src/AccountGatewayMemory";
import PostgreSQLAdapter from "../src/PostgreSQLAdapter";
import TransferUseCase from "../src/TransferUseCase";

test("Deve transferir entre contas em memory", async function () {
	const accountGateway = new AccountGatewayMemory();
	const from = new Account("897654");
	from.credit(100);
	const to = new Account("765432");
	await accountGateway.save(from);
	await accountGateway.save(to);
	const transferUseCase = new TransferUseCase(accountGateway);
	const input = {
		from: "897654",
		to: "765432",
		amount: 50
	}
	await transferUseCase.execute(input);
	console.log(accountGateway.accounts);
});

test("Deve transferir entre contas no database", async function () {
	const connection = new PostgreSQLAdapter();
	const accountGateway = new AccountGatewayDatabase(connection);
	const from = new Account("897654");
	from.credit(100);
	const to = new Account("765432");
	await accountGateway.save(from);
	await accountGateway.save(to);
	const transferUseCase = new TransferUseCase(accountGateway);
	const input = {
		from: "897654",
		to: "765432",
		amount: 50
	}
	await transferUseCase.execute(input);
});
