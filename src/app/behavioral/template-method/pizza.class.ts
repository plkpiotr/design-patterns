export abstract class Pizza {
  public templateMethod(): string {
    let pizza = '';
    pizza += `${this.prepareDough()}, `;
    pizza += `${this.prepareSauce()}, `;
    pizza += `${this.chooseCheese()}, `;
    pizza += `${this.chooseIngredients()}`;
    pizza += this.pourKetchup();
    return pizza;
  }

  protected abstract chooseCheese(): string;

  protected abstract chooseIngredients(): string;

  protected prepareSauce(): string {
    return 'sauce';
  }

  protected prepareDough(): string {
    return 'dough';
  }

  protected pourKetchup(): string {
    return '';
  }
}
