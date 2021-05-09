import { Chair } from './chair.interface';

export class ModernChair implements Chair {
  public showOffer(): string {
    return 'modern chair itself costs $149';
  }
}
