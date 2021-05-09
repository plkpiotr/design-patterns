import { Builder } from './builder.interface';
import { Car } from './car.class';

export class Designer implements Builder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  public withEngine(engine: string): void {
    this.car.setEngine(engine);
  }

  public withPrice(price: number): void {
    this.car.setPrice(price);
  }

  public putCarIntoUse(): Car {
    const completedCar = this.car;
    this.car = new Car();
    return completedCar;
  }
}
