import { Device } from './device.interface';

export class FlatScreen implements Device {
  public blink(): string {
    return 'red light blinked';
  }
}
