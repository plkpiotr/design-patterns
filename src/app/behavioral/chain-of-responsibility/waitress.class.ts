import { StadiumHandler } from './stadium-handler.class';

export class Waitress extends StadiumHandler {
  public handle(request: string): string {
    if (request === 'prepare food') {
      return `waitress prepared food`;
    }
    return super.handle(request);
  }
}
