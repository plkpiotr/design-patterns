export interface Handler {
  addNextHandler(handler: Handler): Handler;
  handle(request: string): string;
}
