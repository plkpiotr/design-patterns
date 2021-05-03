import { Vehicle } from './vehicle.interface';

export class Car implements Vehicle {
  public drive(): string {
    return 'delivered by a car';
  }
}
