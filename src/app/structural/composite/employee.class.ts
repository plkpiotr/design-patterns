import { Entity } from './entity.class';

export class Employee extends Entity {
  public showSalary(): number {
    return 3000;
  }
}
