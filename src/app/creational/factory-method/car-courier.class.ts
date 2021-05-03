import { Courier } from './driver.class';
import { Vehicle } from './vehicle.interface';
import { Car } from './car.class';

export class CarCourier extends Courier {
  public factoryMethod(): Vehicle {
    return new Car();
  }
}
