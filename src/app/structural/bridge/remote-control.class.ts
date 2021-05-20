import { EmbeddedControl } from './embedded-control.class';

export class RemoteControl extends EmbeddedControl {
  public addChannelToFavorites(): string {
    const deviceResponse = this.device.blink();
    return `${deviceResponse}, added channel to favorites`;
  }
}
