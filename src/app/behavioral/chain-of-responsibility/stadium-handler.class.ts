import { Handler } from './handler.interface';

export abstract class StadiumHandler implements Handler {
  private nextHandler: Handler;

  public addNextHandler(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    return this.nextHandler !== undefined ? this.nextHandler.handle(request) : 'nobody was able to do that';
  }
}
