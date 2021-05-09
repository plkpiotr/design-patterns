import { Builder } from './builder.interface';

export class Manager {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public manageBasicVersion(): void {
    this.builder.withEngine('1.5 VVT-i');
    this.builder.withPrice(59000);
  }

  public managePremiumVersion(): void {
    this.builder.withEngine('1.8 D-4D');
    this.builder.withPrice(72000);
  }
}
