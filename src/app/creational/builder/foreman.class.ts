import { Builder } from './builder.interface';

export class Foreman {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildBasicVersion(): void {
    this.builder.buildWithElevator();
  }

  public buildPremiumVersion(): void {
    this.builder.buildWithElevator();
    this.builder.buildWithPool('2 meters');
    this.builder.buildWithPool('3 meters');
  }
}
