import { Builder } from './builder.interface';
import { House } from './house.class';

export class Crew implements Builder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  public buildWithElevator(): void {
    this.house.addEquipment('elevator');
  }

  public buildWithPool(size: string): void {
    this.house.addEquipment(`${size} pool`);
  }

  public putHouseIntoUse(): House {
    const completedHouse = this.house;
    this.house = new House();
    return completedHouse;
  }
}
