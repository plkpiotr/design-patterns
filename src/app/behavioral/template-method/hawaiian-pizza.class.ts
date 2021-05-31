import { Pizza } from './pizza.class';

export class HawaiianPizza extends Pizza {
  protected chooseCheese(): string {
    return 'cheddar';
  }

  protected chooseIngredients(): string {
    return 'ham, pineapple';
  }
}
