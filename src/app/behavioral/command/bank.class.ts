import { BankEmployee } from './bank-employee.class';
import { Command } from './command.interface';

export class Bank implements Command {
  constructor(private bankEmployee: BankEmployee, private contract: string) {}

  public execute(): string {
    return `sign a contract (${this.bankEmployee.signContract(this.contract)})`;
  }
}
