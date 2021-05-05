import { Table } from './table.interface';
import { FurnitureFactory } from './furniture-factory.interface';
import { Chair } from './chair.interface';
import { RetroChair } from './retro-chair.class';
import { RetroTable } from './retro-table.class';

export class RetroFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new RetroChair();
  }

  public createTable(): Table {
    return new RetroTable();
  }
}
