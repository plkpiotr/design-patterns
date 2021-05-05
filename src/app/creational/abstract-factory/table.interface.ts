import { Chair } from './chair.interface';

export interface Table {
  showRegularOffer(): string;
  showSpecialOffer(chair: Chair): string;
}
