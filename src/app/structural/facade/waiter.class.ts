import { Barista } from './barista.class';
import { Cook } from './cook.class';

export class Waiter {
  constructor(private cook?: Cook, private barista?: Barista) {
    this.cook = cook ?? new Cook();
    this.barista = barista ?? new Barista();
  }

  public fillOrder(): string {
    const dinner = this.cook.prepareDinner();
    const coffee = this.barista.prepareCoffee();
    return `${dinner}, ${coffee}`;
  }

  public fillDoubleOrder(): string {
    const dinner = this.cook.prepareDinner();
    const coffee = this.barista.prepareCoffee();
    return `${dinner} x2, ${coffee} x2`;
  }
}
