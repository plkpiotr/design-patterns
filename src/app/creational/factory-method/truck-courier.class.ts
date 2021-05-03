import { Courier } from './driver.class';
import { Vehicle } from './vehicle.interface';
import { Truck } from './truck.class';

export class TruckCourier extends Courier {
  public factoryMethod(): Vehicle {
    return new Truck();
  }
}
