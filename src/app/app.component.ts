import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Director } from './creational/builder/director.class';
import { Contractor } from './creational/builder/contractor.class';
import { Team } from './behavioral/strategy/team.class';
import { OffensiveStrategy } from './behavioral/strategy/offensive-strategy.class';
import { DefensiveStrategy } from './behavioral/strategy/defensive-strategy.class';
import { CarCourier } from './creational/factory-method/car-courier.class';
import { TruckCourier } from './creational/factory-method/truck-courier.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    AppComponent.presentBuilder();
    AppComponent.presentFactoryMethod();
    AppComponent.presentDecorator();
    AppComponent.presentStrategy();
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
    const carCourier = new CarCourier();
    const car = carCourier.deliver();
    console.log(car); // "delivered by a car"

    const truckCourier = new TruckCourier();
    const truck = truckCourier.deliver();
    console.log(truck); // "delivered by a truck"
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

  private static presentStrategy(): void {
    const team = new Team(new DefensiveStrategy());
    const defensiveLineup = team.prepareLineup();
    console.error(defensiveLineup); // ["Tia", "Rocket"]

    team.setStrategy(new OffensiveStrategy());
    const offensiveLineup = team.prepareLineup();
    console.error(offensiveLineup); // ["Ahito", "Rocket"]
  }
}
