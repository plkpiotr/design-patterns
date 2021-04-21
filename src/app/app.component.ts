import { Component } from '@angular/core';
import { Woman } from './creational/decorator/woman.class';
import { Jeweller } from './creational/decorator/jeweller.class';
import { ClothingStore } from './creational/decorator/clothing-store.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';

  constructor() {
    AppComponent.presentDecorator();
  }

  private static presentDecorator(): void {
    const woman = new Woman();
    woman.wear();
    const jeweller = new Jeweller(woman);
    jeweller.wear();
    const clothingStore = new ClothingStore(jeweller);
    clothingStore.wear();
    // we don't use Shop class and we can create a wrapper for client logic
  }
}
