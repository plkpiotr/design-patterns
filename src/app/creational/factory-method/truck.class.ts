import { Vehicle } from './vehicle.interface';

export class Truck implements Vehicle {
  public drive(): string {
    return 'delivered by a truck';
  }
}
