import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgreSQLAdapter implements Connection {
	pgp: any;

	constructor () {
		this.pgp = pgp()("postgres://postgres:123456@localhost:5432/app");
	}

	async query(statement: string, params: any): Promise<any> {
		return this.pgp.query(statement, params);
	}

	async close(): Promise<any> {
		return this.pgp.$pool.end();
	}
}