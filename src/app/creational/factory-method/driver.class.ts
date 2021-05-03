import { Vehicle } from './vehicle.interface';

export abstract class Courier {
  public abstract factoryMethod(): Vehicle;

  public deliver(): string {
    const vehicle = this.factoryMethod();
    return vehicle.drive();
  }
}
