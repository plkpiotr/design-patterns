import { Device } from './device.interface';

export class EmbeddedControl {
  constructor(protected device: Device) {}

  public turnVolumeUp(): string {
    const deviceResponse = this.device.blink();
    return `${deviceResponse}, turned the volume up`;
  }
}
