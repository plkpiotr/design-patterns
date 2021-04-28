import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Foreman } from './creational/builder/foreman.class';
import { ConstructionCrew } from './creational/builder/construction-crew.class';
import { Route } from './behavioral/strategy/route.class';
import { FastestRoute } from './behavioral/strategy/fastest-route.class';
import { ShortestRoute } from './behavioral/strategy/shortest-route.class';

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
    AppComponent.presentStrategy();
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

  private static presentStrategy(): void {
    const route = new Route(new FastestRoute());
    route.findRouteToRome('Warsaw');

    route.setStrategy(new ShortestRoute());
    route.findRouteToRome('Paris');
  }
}
