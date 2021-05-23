import { Hospital } from './hospital.interface';

export class Patient implements Hospital {
  public visitHospital(): string {
    return 'hospital visited';
  }
}
