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
import { Cashier } from './behavioral/chain-of-responsibility/cashier.class';
import { SecurityGuard } from './behavioral/chain-of-responsibility/security-guard.class';
import { Waitress } from './behavioral/chain-of-responsibility/waitress.class';
import { BankEmployee } from './behavioral/command/bank-employee.class';
import { Bank } from './behavioral/command/bank.class';
import { CashMachine } from './behavioral/command/cash-machine.class';
import { Customer } from './behavioral/command/customer.class';
import { Helicopter } from './behavioral/mediator/helicopter.class';
import { Ambulance } from './behavioral/mediator/ambulance.class';
import { Dispatch } from './behavioral/mediator/dispatch.class';
import { Book } from './behavioral/observer/book.class';
import { Novice } from './behavioral/observer/novice.class';
import { Collector } from './behavioral/observer/collector.class';
import { LiquidState, SolidState } from './behavioral/state/states.class';
import { HydrogenOxide } from './behavioral/state/hydrogen-oxide.class';
import { MexicanPizza } from './behavioral/template-method/mexican-pizza.class';
import { HawaiianPizza } from './behavioral/template-method/hawaiian-pizza.class';
import { LessThan } from './behavioral/specification/lower-than.class';
import { GreaterThan } from './behavioral/specification/greater-than.class';

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
    AppComponent.presentChainOfResponsibility();
    AppComponent.presentCommand();
    AppComponent.presentComposite();
    AppComponent.presentDecorator();
    AppComponent.presentFacade();
    AppComponent.presentFactoryMethod();
    AppComponent.presentFluentInterface();
    AppComponent.presentMediator();
    AppComponent.presentObserver();
    AppComponent.presentProxy();
    AppComponent.presentSingleton();
    AppComponent.presentSpecification();
    AppComponent.presentState();
    AppComponent.presentStrategy();
    AppComponent.presentTemplateMethod();
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

  private static presentChainOfResponsibility(): void {
    const cashier = new Cashier();
    const securityGuard = new SecurityGuard();
    const waitress = new Waitress();
    cashier.addNextHandler(securityGuard)
      .addNextHandler(waitress);
    console.error(cashier.handle('sell a ticket')); // "cashier sold a ticket"
    console.error(cashier.handle('prepare food')); // "waitress prepared food"
    console.error(cashier.handle('get a haircut')); // "nobody was able to do that"
    console.error(securityGuard.handle('sell a ticket')); // "nobody was able to do that"
  }

  private static presentCommand(): void {
    const customer = new Customer();
    const cashMachine = new CashMachine(1000);
    customer.setFirstCommand(cashMachine);
    const bankEmployee = new BankEmployee();
    const bank = new Bank(bankEmployee, 'mortgage');
    customer.setSecondCommand(bank);
    const commandsStepByStep = customer.executeCommandsStepByStep();
    console.error(commandsStepByStep); // "cash out (1000), sign a contract (mortgage)"
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

  private static presentMediator(): void {
    const ambulance = new Ambulance();
    console.error(ambulance.notifyUnderControl()); // "ambulance is not assign to any dispatch"

    const helicopter = new Helicopter();
    const dispatch = new Dispatch(ambulance, helicopter);
    console.error(ambulance.notifyUnderControl()); // "helicopter is not needed"
    console.error(helicopter.notifyForBackup()); // "ambulance arrives, helicopter is busy"

    const substituteAmbulance = new Ambulance(dispatch);
    console.error(substituteAmbulance.notifyUnderControl()); // "helicopter is not needed"
  }

  private static presentObserver(): void {
    const book = new Book();
    const collector = new Collector();
    console.error(book.follow(collector)); // "follower started following book"

    const novice = new Novice();
    console.error(book.follow(novice)); // "follower started following book"
    console.error(book.changePrice(69)); // "collector received notification"
    console.error(book.changePrice(49)); // "collector received notification, novice received notification"
    console.error(book.unfollow(novice)); // "follower stopped following book"
    console.error(book.changePrice(39)); // "collector received notification"
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

  private static presentSpecification(): void {
    const firstSpecification = new GreaterThan(2);
    console.error(firstSpecification.isSatisfiedBy(3)); // true
    console.error(firstSpecification.isSatisfiedBy(5)); // true

    const secondSpecification = new LessThan(4);
    const thirdSpecification = firstSpecification.and(secondSpecification);
    console.error(thirdSpecification.isSatisfiedBy(3)); // true
    console.error(thirdSpecification.isSatisfiedBy(5)); // false

    const fourSpecification = thirdSpecification.not();
    console.error(fourSpecification.isSatisfiedBy(3)); // false
    console.error(fourSpecification.isSatisfiedBy(5)); // true
  }

  private static presentState(): void {
    const liquidState = new LiquidState();
    const hydrogenOxide = new HydrogenOxide(liquidState);
    console.error(hydrogenOxide.warm()); // "still water"
    console.error(hydrogenOxide.cool()); // "ice"
    console.error(hydrogenOxide.showName()); // "H2O"

    const solidState = new SolidState();
    hydrogenOxide.changeState(solidState);
    console.error(hydrogenOxide.warm()); // "water"
    console.error(hydrogenOxide.cool()); // "ice"
    console.error(hydrogenOxide.showName()); // "H2O"
  }

  private static presentStrategy(): void {
    const defensiveStrategy = new DefensiveStrategy();
    const team = new Team(defensiveStrategy);
    const defensiveLineup = team.prepareLineup();
    console.error(defensiveLineup); // ["Pavard", "Lewandowski"]

    const offensiveStrategy = new OffensiveStrategy();
    team.setStrategy(offensiveStrategy);
    const offensiveLineup = team.prepareLineup();
    console.error(offensiveLineup); // ["Kimmich", "Lewandowski"]
  }

  private static presentTemplateMethod(): void {
    const hawaiianPizza = new HawaiianPizza();
    console.error(hawaiianPizza.templateMethod()); // "dough, sauce, cheddar, ham, pineapple"

    const mexicanPizza = new MexicanPizza();
    console.error(mexicanPizza.templateMethod()); // "dough, sauce, mozzarella, beef, jalapenos, hot ketchup"
  }
}
