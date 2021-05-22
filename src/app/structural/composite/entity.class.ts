export abstract class Entity {
  protected entity: Entity;

  public abstract showSalary(): number;

  public setEntity(entity: Entity): void {
    this.entity = entity;
  }
}
