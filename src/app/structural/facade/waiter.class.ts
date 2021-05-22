import { Barista } from './barista.class';
import { Cook } from './cook.class';

export class Waiter {
  constructor(private cook?: Cook, private barista?: Barista) {
    this.cook = cook ?? new Cook();
    this.barista = barista ?? new Barista();
  }

  public fillFullOrder(): string {
    const dinner = this.cook.prepareDinner();
    const coffee = this.barista.prepareCoffee();
    return `${dinner}, ${coffee}`;
  }

  public fillPartialOrder(): string {
    return this.barista.prepareCoffee();
  }
}
