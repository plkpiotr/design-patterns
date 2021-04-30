export class House {
  private equipments: string[] = [];

  public addEquipment(equipment: string): void {
    this.equipments.push(equipment);
  }

  public getEquipments(): string[] {
    return this.equipments;
  }
}
