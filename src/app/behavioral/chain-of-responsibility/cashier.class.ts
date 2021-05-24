import { StadiumHandler } from './stadium-handler.class';

export class Cashier extends StadiumHandler {
  public handle(request: string): string {
    if (request === 'sell a ticket') {
      return `cashier sold a ticket`;
    }
    return super.handle(request);
  }
}
