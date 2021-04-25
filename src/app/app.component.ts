import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Foreman } from './creational/builder/foreman.class';
import { ConstructionCrew } from './creational/builder/construction-crew.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';

  constructor() {
    AppComponent.presentBuilder();
    AppComponent.presentDecorator();
  }

  private static presentBuilder(): void {
    const foreman = new Foreman();
    const constructionCrew = new ConstructionCrew();
    foreman.setBuilder(constructionCrew);

    foreman.buildBasicVersion();
    constructionCrew.putHouseIntoUse().showEquipments();

    foreman.buildPremiumVersion();
    constructionCrew.putHouseIntoUse().showEquipments();

    constructionCrew.buildWithPool('5 feet');
    constructionCrew.buildWithElevator();
    constructionCrew.putHouseIntoUse().showEquipments();
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
