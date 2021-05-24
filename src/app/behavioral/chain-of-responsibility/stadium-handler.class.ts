import { Handler } from './handler.interface';

export abstract class StadiumHandler implements Handler {
  private nextHandler: Handler;

  public addNextHandler(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler !== undefined) {
      return this.nextHandler.handle(request);
    }
    return 'nobody was able to do that';
  }
}
