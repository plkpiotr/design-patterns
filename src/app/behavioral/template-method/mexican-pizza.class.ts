import { Pizza } from './pizza.class';

export class MexicanPizza extends Pizza {
  protected chooseCheese(): string {
    return 'mozzarella';
  }

  protected chooseIngredients(): string {
    return 'beef, jalapenos';
  }

  protected pourKetchup(): string {
    return ', hot ketchup';
  }
}
