import { Chair } from './chair.interface';
import { Table } from './table.interface';

export interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}
