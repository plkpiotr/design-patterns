import { Entity } from './entity.class';

export class Department extends Entity {
  protected entities: Entity[] = [];

  public addEntity(entity: Entity): void {
    this.entities.push(entity);
    entity.setEntity(this);
  }

  public showSalary(): number {
    return this.entities.reduce((sum, entity) => sum + entity.showSalary(), 0);
  }
}
