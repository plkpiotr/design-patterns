import { Vehicle } from './vehicle.class';

export class Helicopter extends Vehicle {
  public notifyForBackup(): string {
    return this.mediator?.notify('backup needed') ?? 'helicopter is not assign to any dispatch';
  }

  public markAsBusy(): string {
    return 'helicopter is busy';
  }

  public markAsNotNeeded(): string {
    return 'helicopter is not needed';
  }
}
