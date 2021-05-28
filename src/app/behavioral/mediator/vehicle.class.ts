import { Mediator } from './mediator.interface';

export class Vehicle {
  constructor(protected mediator?: Mediator) {}

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
