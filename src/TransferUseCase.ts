import AccountGateway from "./AccountGateway";
import TransferService from "./TransferService";

export default class TransferUseCase {

	constructor (readonly accountGateway: AccountGateway) {
	}

	async execute (input: Input): Promise<Output> {
		const from = await this.accountGateway.get(input.from);
		const to = await this.accountGateway.get(input.to);
		const transferService = new TransferService();
		transferService.transfer(from, to, input.amount);
		await this.accountGateway.update(from);
		await this.accountGateway.update(to);
		return {
			success: true
		};
	}
}

type Input = {
	from: string,
	to: string,
	amount: number
}

type Output = {
	success: boolean
}
