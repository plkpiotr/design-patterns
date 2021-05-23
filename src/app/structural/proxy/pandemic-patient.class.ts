import { Patient } from './patient.class';
import { Hospital } from './hospital.interface';

export class PandemicPatient implements Hospital {
  constructor(private patient: Patient) {}

  public visitHospital(): string {
    return `${this.disinfectHands()} ${this.patient.visitHospital()}`;
  }

  private disinfectHands(): string {
    return 'hands disinfected (access granted),';
  }
}
