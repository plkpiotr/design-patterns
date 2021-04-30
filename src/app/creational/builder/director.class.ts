import { Builder } from './builder.interface';

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public manageBasicVersion(): void {
    this.builder.buildWithElevator();
  }

  public managePremiumVersion(): void {
    this.builder.buildWithElevator();
    this.builder.buildWithPool('2 meters');
    this.builder.buildWithPool('3 meters');
  }
}
