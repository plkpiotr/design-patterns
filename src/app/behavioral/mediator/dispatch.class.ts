import { Mediator } from './mediator.interface';
import { Ambulance } from './ambulance.class';
import { Helicopter } from './helicopter.class';

export class Dispatch implements Mediator {
  constructor(private ambulance: Ambulance, private helicopter: Helicopter) {
    this.ambulance.setMediator(this);
    this.helicopter.setMediator(this);
  }

  public notify(notification: string): string {
    if (notification === 'under control') {
      return this.helicopter.markAsNotNeeded();
    }
    if (notification === 'backup needed') {
      return `${this.ambulance.arrive()}, ${this.helicopter.markAsBusy()}`;
    }
  }
}
