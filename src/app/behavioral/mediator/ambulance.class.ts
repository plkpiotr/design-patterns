import { Vehicle } from './vehicle.class';

export class Ambulance extends Vehicle {
  public notifyUnderControl(): string {
    return this.mediator?.notify('under control') ?? 'ambulance is not assign to any dispatch';
  }

  public arrive(): string {
    return `ambulance arrives`;
  }
}
