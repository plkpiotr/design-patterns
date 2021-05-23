import { Component } from '@angular/core';
import { Woman } from './structural/decorator/woman.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Manager } from './creational/builder/manager.class';
import { Designer } from './creational/builder/designer.class';
import { Team } from './behavioral/strategy/team.class';
import { OffensiveStrategy } from './behavioral/strategy/offensive-strategy.class';
import { DefensiveStrategy } from './behavioral/strategy/defensive-strategy.class';
import { PainterStudio } from './creational/factory-method/painter-studio.class';
import { SculptorStudio } from './creational/factory-method/sculptor-studio.class';
import { RetroFactory } from './creational/abstract-factory/retro-factory.class';
import { ModernFactory } from './creational/abstract-factory/modern-factory.class';
import { King } from './creational/singleton/king.class';
import { Label } from './creational/fluent-interface/label.class';
import { Movie } from './structural/adapter/movie.class';
import { Remake } from './structural/adapter/remake.class';
import { Adapter } from './structural/adapter/adapter.class';
import { FlatScreen } from './structural/bridge/flat-screen.class';
import { EmbeddedControl } from './structural/bridge/embedded-control.class';
import { RemoteControl } from './structural/bridge/remote-control.class';
import { Decoder } from './structural/bridge/decoder.class';
import { Department } from './structural/composite/department.class';
import { Employee } from './structural/composite/employee.class';
import { Barista } from './structural/facade/barista.class';
import { Cook } from './structural/facade/cook.class';
import { Waiter } from './structural/facade/waiter.class';
import { Patient } from './structural/proxy/patient.class';
import { PandemicPatient } from './structural/proxy/pandemic-patient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Results of design patterns are visible in the browser console 😊';

  constructor() {
    AppComponent.presentAbstractFactory();
    AppComponent.presentAdapter();
    AppComponent.presentBridge();
    AppComponent.presentBuilder();
    AppComponent.presentComposite();
    AppComponent.presentDecorator();
    AppComponent.presentFacade();
    AppComponent.presentFactoryMethod();
    AppComponent.presentFluentInterface();
    AppComponent.presentProxy();
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

  private static presentAdapter(): void {
    const movie = new Movie();
    console.warn(movie.displayVGA()); // [640, 480]

    const remake = new Remake();
    console.warn(remake.displayHD()); // [1920, 1080]

    const adaptedRemake = new Adapter(remake);
    console.warn(adaptedRemake.displayVGA()); // [640, 360]
  }

  private static presentBridge(): void {
    const flatScreen = new FlatScreen();
    let embeddedControl = new EmbeddedControl(flatScreen);
    let remoteControl = new RemoteControl(flatScreen);
    console.warn(embeddedControl.turnVolumeUp()); // "red light blinked, turned the volume up"
    console.warn(remoteControl.turnVolumeUp()); // "red light blinked, turned the volume up"
    console.warn(remoteControl.addChannelToFavorites()); // "red light blinked, added channel to favorites"

    const decoder = new Decoder();
    embeddedControl = new EmbeddedControl(decoder);
    remoteControl = new RemoteControl(decoder);
    console.warn(embeddedControl.turnVolumeUp()); // "green light blinked, turned the volume up"
    console.warn(remoteControl.turnVolumeUp()); // "green light blinked, turned the volume up"
    console.warn(remoteControl.addChannelToFavorites()); // "green light blinked, added channel to favorites"
  }

  private static presentBuilder(): void {
    const manager = new Manager();
    const designer = new Designer();
    manager.setBuilder(designer);

    manager.manageBasicVersion();
    const basicCar = designer.putCarIntoUse();
    console.log(basicCar); // Car {engine: "1.5 VVT-i", price: 59000}

    manager.managePremiumVersion();
    const premiumCar = designer.putCarIntoUse();
    console.log(premiumCar); // Car {engine: "1.8 D-4D", price: 72000}

    designer.withPrice(63000);
    designer.withEngine('1.6 D-4D');
    const customCar = designer.putCarIntoUse();
    console.log(customCar); // Car {price: 63000, engine: "1.6 D-4D"}
  }

  private static presentComposite(): void {
    const ceo = new Employee();
    console.warn(ceo.showSalary()); // 3000

    const department = new Department();
    department.addEntity(ceo);
    const manager = new Employee();
    department.addEntity(manager);
    console.warn(department.showSalary()); // 6000

    const section = new Department();
    department.addEntity(section);
    const worker = new Employee();
    section.addEntity(worker);
    console.warn(section.showSalary()); // 3000
    console.warn(department.showSalary()); // 9000
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

  private static presentFacade(): void {
    const firstWaiter = new Waiter();
    console.warn(firstWaiter.fillOrder()); // "dinner, coffee"

    const cook = new Cook();
    const barista = new Barista();
    const secondWaiter = new Waiter(cook, barista);
    console.warn(secondWaiter.fillDoubleOrder()); // "dinner x2, coffee x2"
  }

  private static presentFactoryMethod(): void {
    const painterStudio = new PainterStudio();
    const painting = painterStudio.createMasterpiece();
    console.log(painting); // "created a painting"

    const sculptorStudio = new SculptorStudio();
    const sculpture = sculptorStudio.createMasterpiece();
    console.log(sculpture); // "created a sculpture"
  }

  private static presentFluentInterface(): void {
    const album = new Label().withName('Recovery')
      .withTracks(['Not Afraid', 'On Fire'])
      .release();

    const deluxeAlbum = new Label(album).withTracks(['Not Afraid', 'On Fire', 'So Bad'])
      .release();

    console.log(album); // Album { name: "Recovery", tracks: ["Not Afraid", "On Fire"] }
    console.log(deluxeAlbum); // Album { name: "Recovery", tracks: ["Not Afraid", "On Fire", "So Bad"] }
  }

  private static presentProxy(): void {
    const patient = new Patient();
    console.warn(patient.visitHospital()); // "hospital visited"

    const pandemicPatient = new PandemicPatient(patient);
    console.warn(pandemicPatient.visitHospital()); // "hands disinfected (access granted), hospital visited"
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
    console.error(defensiveLineup); // ["Pavard", "Lewandowski"]

    team.setStrategy(new OffensiveStrategy());
    const offensiveLineup = team.prepareLineup();
    console.error(offensiveLineup); // ["Kimmich", "Lewandowski"]
  }
}
