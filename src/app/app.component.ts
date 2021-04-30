import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Scarf } from './structural/decorator/scarf.class';
import { Jacket } from './structural/decorator/jacket.class';
import { Director } from './creational/builder/director.class';
import { Crew } from './creational/builder/crew.class';
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
    const director = new Director();
    const crew = new Crew();
    director.setBuilder(crew);

    director.manageBasicVersion();
    const basicHouse = crew.putHouseIntoUse();

    director.managePremiumVersion();
    const premiumHouse = crew.putHouseIntoUse();

    crew.buildWithPool('5 feet');
    crew.buildWithElevator();
    const customHouse = crew.putHouseIntoUse();
  }

  private static presentDecorator(): void {
    const woman = new Woman();
    woman.wear();

    const jacket = new Jacket(woman);
    jacket.wear();

    const scarf = new Scarf(jacket);
    scarf.wear();
  }

  private static presentStrategy(): void {
    const route = new Route(new FastestRoute());
    route.findRouteToRome('Warsaw');

    route.setStrategy(new ShortestRoute());
    route.findRouteToRome('Paris');
  }
}
