import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Scarf } from './structural/decorator/scarf.class';
import { Jacket } from './structural/decorator/jacket.class';
import { Director } from './creational/builder/director.class';
import { Crew } from './creational/builder/crew.class';
import { Team } from './behavioral/strategy/team.class';
import { OffensiveStrategy } from './behavioral/strategy/offensive-strategy.class';
import { DefensiveStrategy } from './behavioral/strategy/defensive-strategy.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    console.log(basicHouse.getEquipments());

    director.managePremiumVersion();
    const premiumHouse = crew.putHouseIntoUse();
    console.warn(premiumHouse.getEquipments());

    crew.buildWithPool('5 feet');
    crew.buildWithElevator();
    const customHouse = crew.putHouseIntoUse();
    console.error(customHouse.getEquipments());
  }

  private static presentDecorator(): void {
    const woman = new Woman();
    const withCasualClothes = woman.wear();
    console.log(withCasualClothes);

    const jacket = new Jacket(woman);
    const withJacket = jacket.wear();
    console.warn(withJacket);

    const scarf = new Scarf(jacket);
    const withScarf = scarf.wear();
    console.error(withScarf);
  }

  private static presentStrategy(): void {
    const team = new Team(new DefensiveStrategy());
    const defensiveLineup = team.prepareLineup();
    console.log(defensiveLineup);

    team.setStrategy(new OffensiveStrategy());
    const offensiveLineup = team.prepareLineup();
    console.warn(offensiveLineup);
  }
}
