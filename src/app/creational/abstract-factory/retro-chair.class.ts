import { Chair } from './chair.interface';

export class RetroChair implements Chair {
  public showOffer(): string {
    return 'retro chair itself costs $199';
  }
}

export class ModernChair implements Chair {
  public showOffer(): string {
    return 'modern chair itself costs $149';
  }
}
