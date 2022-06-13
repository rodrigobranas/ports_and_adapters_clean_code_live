import Account from "../src/Account";

test("Deve criar uma conta", function () {
	const account = new Account("987654");
	expect(account.getBalance()).toBe(0);
});

test("Deve creditar uma conta", function () {
	const account = new Account("987654");
	account.credit(100);
	expect(account.getBalance()).toBe(100);
});

test("Deve debitar uma conta", function () {
	const account = new Account("987654");
	account.credit(100);
	account.debit(50);
	expect(account.getBalance()).toBe(50);
});
