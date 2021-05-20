import { Device } from './device.interface';

export class Decoder implements Device {
  public blink(): string {
    return 'green light blinked';
  }
}
