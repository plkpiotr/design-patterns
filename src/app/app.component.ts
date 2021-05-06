import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Director } from './creational/builder/director.class';
import { Contractor } from './creational/builder/contractor.class';
import { Team } from './behavioral/strategy/team.class';
import { OffensiveStrategy } from './behavioral/strategy/offensive-strategy.class';
import { DefensiveStrategy } from './behavioral/strategy/defensive-strategy.class';
import { PainterStudio } from './creational/factory-method/painter-studio.class';
import { SculptorStudio } from './creational/factory-method/sculptor-studio.class';
import { RetroFactory } from './creational/abstract-factory/retro-factory.class';
import { ModernFactory } from './creational/abstract-factory/modern-factory.class';
import { King } from './creational/singleton/king.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    AppComponent.presentAbstractFactory();
    AppComponent.presentBuilder();
    AppComponent.presentFactoryMethod();
    AppComponent.presentDecorator();
    AppComponent.presentSingleton();
    AppComponent.presentStrategy();
  }

  private static presentAbstractFactory(): void {
    const retroFactory = new RetroFactory();
    const retroChair = retroFactory.createChair();
    const retroTable = retroFactory.createTable();
    console.log(retroTable.showRegularOffer()); // "retro table itself costs $499"
    console.log(retroTable.showSpecialOffer(retroChair)); // "retro table with any chair cost $599, retro chair itself costs $199"

    const modernFactory = new ModernFactory();
    const modernTable = modernFactory.createTable();
    console.log(modernTable.showRegularOffer()); // "modern table itself costs $399"
    console.log(modernTable.showSpecialOffer(retroChair)); // "modern table with any chair cost $499, retro chair itself costs $199"
  }

  private static presentBuilder(): void {
    const director = new Director();
    const contractor = new Contractor();
    director.setBuilder(contractor);

    director.manageBasicVersion();
    const basicHouse = contractor.putHouseIntoUse();
    console.log(basicHouse.getEquipments()); // ["elevator"]

    director.managePremiumVersion();
    const premiumHouse = contractor.putHouseIntoUse();
    console.log(premiumHouse.getEquipments()); // ["elevator", "big pool", "small pool"]

    contractor.buildWithPool('medium');
    contractor.buildWithElevator();
    const customHouse = contractor.putHouseIntoUse();
    console.log(customHouse.getEquipments()); // ["medium pool", "elevator"]
  }

  private static presentFactoryMethod(): void {
    const painterStudio = new PainterStudio();
    const painting = painterStudio.createMasterpiece();
    console.log(painting); // "created a painting"

    const sculptorStudio = new SculptorStudio();
    const sculpture = sculptorStudio.createMasterpiece();
    console.log(sculpture); // "created a sculpture"
  }

  private static presentDecorator(): void {
    const woman = new Woman();
    const withCasualClothes = woman.wear();
    console.warn(withCasualClothes); // "worn casual clothes"

    const clothingStore = new ClothingStore(woman);
    const withScarf = clothingStore.wear();
    console.warn(withScarf); // "worn casual clothes, scarf"

    const jeweller = new Jeweller(clothingStore);
    const withBracelet = jeweller.wear();
    console.warn(withBracelet); // "worn casual clothes, scarf, bracelet"
  }

  private static presentSingleton(): void {
    const king = King.getInstance();
    const sameKing = King.getInstance();

    console.log(king === sameKing); // true
    console.log(king.showKingName()); // "Louis XX"
    console.log(sameKing.showKingName()); // "Louis XX"
  }

  private static presentStrategy(): void {
    const team = new Team(new DefensiveStrategy());
    const defensiveLineup = team.prepareLineup();
    console.error(defensiveLineup); // ["Tia", "Rocket"]

    team.setStrategy(new OffensiveStrategy());
    const offensiveLineup = team.prepareLineup();
    console.error(offensiveLineup); // ["Ahito", "Rocket"]
  }
}
