import { StadiumHandler } from './stadium-handler.class';

export class SecurityGuard extends StadiumHandler {
  public handle(request: string): string {
    if (request === 'past the gate') {
      return `security guard let me past the gate`;
    }
    return super.handle(request);
  }
}
