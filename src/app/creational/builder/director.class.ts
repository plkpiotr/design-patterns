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
    this.builder.buildWithPool('big');
    this.builder.buildWithPool('small');
  }
}
