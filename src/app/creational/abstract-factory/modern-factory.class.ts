import { Table } from './table.interface';
import { FurnitureFactory } from './furniture-factory.interface';
import { Chair } from './chair.interface';
import { ModernTable } from './modern-table.class';
import { ModernChair } from './modern-chair.class';

export class ModernFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ModernChair();
  }

  public createTable(): Table {
    return new ModernTable();
  }
}
