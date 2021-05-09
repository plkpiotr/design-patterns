export class Car {
  private engine: string;
  private price: number;

  public setEngine(engine: string): void {
    this.engine = engine;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}
