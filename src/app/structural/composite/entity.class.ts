export abstract class Entity {
  private entity: Entity;

  public abstract showSalary(): number;

  public setEntity(entity: Entity): void {
    this.entity = entity;
  }
}
