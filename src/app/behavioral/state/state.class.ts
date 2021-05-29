import { HydrogenOxide } from './hydrogen-oxide.class';

export abstract class State {
  protected hydrogenOxide: HydrogenOxide;

  public abstract lowerTemperature(): string;

  public abstract raiseTemperature(): string;

  public setHydrogenOxide(hydrogenOxide: HydrogenOxide): void {
    this.hydrogenOxide = hydrogenOxide;
  }

  public showChemicalFormula(): string {
    return 'H2O';
  }
}
