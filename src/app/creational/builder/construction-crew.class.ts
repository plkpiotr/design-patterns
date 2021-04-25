import { Builder } from './builder.interface';
import { House } from './house.class';

export class ConstructionCrew implements Builder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  public buildWithElevator(): void {
    this.house.addEquipment('elevator');
  }

  public buildWithPool(depth: string): void {
    this.house.addEquipment(`pool with water depth: ${depth}`);
  }

  public putHouseIntoUse(): House {
    const completedHouse = this.house;
    this.house = new House();
    return completedHouse;
  }
}
