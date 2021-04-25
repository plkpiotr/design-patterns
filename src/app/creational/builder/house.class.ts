export class House {
  private equipments: string[] = [];

  public addEquipment(equipment: string): void {
    this.equipments.push(equipment);
  }

  public showEquipments(): void {
    console.warn(this.equipments);
  }
}
