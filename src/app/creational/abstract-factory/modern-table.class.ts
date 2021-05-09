import { Table } from './table.interface';
import { Chair } from './chair.interface';

export class ModernTable implements Table {
  public showRegularOffer(): string {
    return 'modern table itself costs $399';
  }

  public showSpecialOffer(chair: Chair): string {
    const chairOffer = chair.showOffer();
    return `modern table with any chair costs $499, ${chairOffer}`;
  }
}
