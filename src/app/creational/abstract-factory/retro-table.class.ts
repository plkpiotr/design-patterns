import { Table } from './table.interface';
import { Chair } from './chair.interface';

export class RetroTable implements Table {
  public showRegularOffer(): string {
    return 'retro table itself costs $499';
  }

  public showSpecialOffer(chair: Chair): string {
    const chairOffer = chair.showOffer();
    return `retro table with any chair costs $599, ${chairOffer}`;
  }
}
