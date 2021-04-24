import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';

  constructor() {
    AppComponent.presentDecorator();
    AppComponent.presentBuilder();
  }

  private static presentBuilder(): void {
    // TODO: Implementation
  }

  private static presentDecorator(): void {
    const woman = new Woman();
    woman.wear();
    const jeweller = new Jeweller(woman);
    jeweller.wear();
    const clothingStore = new ClothingStore(jeweller);
    clothingStore.wear();
  }
}
