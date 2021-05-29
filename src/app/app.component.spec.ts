import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RetroFactory } from './creational/abstract-factory/retro-factory.class';
import { ModernFactory } from './creational/abstract-factory/modern-factory.class';
import { Manager } from './creational/builder/manager.class';
import { Designer } from './creational/builder/designer.class';
import { PainterStudio } from './creational/factory-method/painter-studio.class';
import { SculptorStudio } from './creational/factory-method/sculptor-studio.class';
import { Label } from './creational/fluent-interface/label.class';
import { King } from './creational/singleton/king.class';
import { Movie } from './structural/adapter/movie.class';
import { Remake } from './structural/adapter/remake.class';
import { Adapter } from './structural/adapter/adapter.class';
import { FlatScreen } from './structural/bridge/flat-screen.class';
import { EmbeddedControl } from './structural/bridge/embedded-control.class';
import { RemoteControl } from './structural/bridge/remote-control.class';
import { Decoder } from './structural/bridge/decoder.class';
import { Employee } from './structural/composite/employee.class';
import { Department } from './structural/composite/department.class';
import { Woman } from './structural/decorator/woman.class';
import { ClothingStore } from './structural/decorator/clothing-store.class';
import { Jeweller } from './structural/decorator/jeweller.class';
import { Waiter } from './structural/facade/waiter.class';
import { Cook } from './structural/facade/cook.class';
import { Barista } from './structural/facade/barista.class';
import { Patient } from './structural/proxy/patient.class';
import { PandemicPatient } from './structural/proxy/pandemic-patient.class';
import { Team } from './behavioral/strategy/team.class';
import { DefensiveStrategy } from './behavioral/strategy/defensive-strategy.class';
import { OffensiveStrategy } from './behavioral/strategy/offensive-strategy.class';
import { Cashier } from './behavioral/chain-of-responsibility/cashier.class';
import { SecurityGuard } from './behavioral/chain-of-responsibility/security-guard.class';
import { Waitress } from './behavioral/chain-of-responsibility/waitress.class';
import { Customer } from './behavioral/command/customer.class';
import { CashMachine } from './behavioral/command/cash-machine.class';
import { BankEmployee } from './behavioral/command/bank-employee.class';
import { Bank } from './behavioral/command/bank.class';
import { Ambulance } from './behavioral/mediator/ambulance.class';
import { Helicopter } from './behavioral/mediator/helicopter.class';
import { Dispatch } from './behavioral/mediator/dispatch.class';
import { Book } from './behavioral/observer/book.class';
import { Novice } from './behavioral/observer/novice.class';
import { Collector } from './behavioral/observer/collector.class';
import { HydrogenOxide } from './behavioral/state/hydrogen-oxide.class';
import { LiquidState, SolidState } from './behavioral/state/states.class';

describe('AppComponent', () => {
  const title = 'Results of design patterns are visible in the browser console 😊';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(title);
  });
});

describe('Creational patterns', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should test abstract factory', () => {
    const retroFactory = new RetroFactory();
    const retroChair = retroFactory.createChair();
    const retroTable = retroFactory.createTable();
    expect(retroTable.showRegularOffer()).toEqual('retro table itself costs $499');
    expect(retroTable.showSpecialOffer(retroChair)).toEqual('retro table with any chair cost $599, retro chair itself costs $199');

    const modernFactory = new ModernFactory();
    const modernTable = modernFactory.createTable();
    expect(modernTable.showRegularOffer()).toEqual('modern table itself costs $399');
    expect(modernTable.showSpecialOffer(retroChair)).toEqual('modern table with any chair cost $499, retro chair itself costs $199');
  });

  it('should test builder', () => {
    const manager = new Manager();
    const designer = new Designer();
    manager.setBuilder(designer);

    manager.manageBasicVersion();
    const basicCar = designer.putCarIntoUse();
    // @ts-ignore
    expect(basicCar.engine).toEqual('1.5 VVT-i');
    // @ts-ignore
    expect(basicCar.price).toEqual(59000);

    manager.managePremiumVersion();
    const premiumCar = designer.putCarIntoUse();
    // @ts-ignore
    expect(premiumCar.engine).toEqual('1.8 D-4D');
    // @ts-ignore
    expect(premiumCar.price).toEqual(72000);


    designer.withPrice(63000);
    designer.withEngine('1.6 D-4D');
    const customCar = designer.putCarIntoUse();
    // @ts-ignore
    expect(customCar.price).toEqual(63000);
    // @ts-ignore
    expect(customCar.engine).toEqual('1.6 D-4D');
  });

  it('should test factory method', () => {
    const painterStudio = new PainterStudio();
    const painting = painterStudio.createMasterpiece();
    expect(painting).toEqual('created a painting');

    const sculptorStudio = new SculptorStudio();
    const sculpture = sculptorStudio.createMasterpiece();
    expect(sculpture).toEqual('created a sculpture');
  });

  it('should test fluent interface', () => {
    const album = new Label().withName('Recovery')
      .withTracks(['Not Afraid', 'On Fire'])
      .release();

    const deluxeAlbum = new Label(album).withTracks(['Not Afraid', 'On Fire', 'So Bad'])
      .release();

    // @ts-ignore
    expect(album.name).toEqual('Recovery');
    // @ts-ignore
    expect(album.tracks).toEqual(['Not Afraid', 'On Fire']);
    // @ts-ignore
    expect(deluxeAlbum.name).toEqual('Recovery');
    // @ts-ignore
    expect(deluxeAlbum.tracks).toEqual(['Not Afraid', 'On Fire', 'So Bad']);
  });

  it('should test singleton', () => {
    const king = King.getInstance();
    const sameKing = King.getInstance();

    expect(king === sameKing).toEqual(true);
    expect(king.showKingName()).toEqual('Louis XX');
    expect(sameKing.showKingName()).toEqual('Louis XX');
  });
});

describe('Structural patterns', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should test adapter', () => {
    const movie = new Movie();
    expect(movie.displayVGA()).toEqual([640, 480]);

    const remake = new Remake();
    expect(remake.displayHD()).toEqual([1920, 1080]);

    const adaptedRemake = new Adapter(remake);
    expect(adaptedRemake.displayVGA()).toEqual([640, 360]);
  });

  it('should test bridge', () => {
    const flatScreen = new FlatScreen();
    let embeddedControl = new EmbeddedControl(flatScreen);
    let remoteControl = new RemoteControl(flatScreen);
    expect(embeddedControl.turnVolumeUp()).toEqual('red light blinked, turned the volume up');
    expect(remoteControl.turnVolumeUp()).toEqual('red light blinked, turned the volume up');
    expect(remoteControl.addChannelToFavorites()).toEqual('red light blinked, added channel to favorites');

    const decoder = new Decoder();
    embeddedControl = new EmbeddedControl(decoder);
    remoteControl = new RemoteControl(decoder);
    expect(embeddedControl.turnVolumeUp()).toEqual('green light blinked, turned the volume up');
    expect(remoteControl.turnVolumeUp()).toEqual('green light blinked, turned the volume up');
    expect(remoteControl.addChannelToFavorites()).toEqual('green light blinked, added channel to favorites');
  });

  it('should test composite', () => {
    const ceo = new Employee();
    expect(ceo.showSalary()).toEqual(3000);

    const department = new Department();
    department.addEntity(ceo);
    const manager = new Employee();
    department.addEntity(manager);
    expect(department.showSalary()).toEqual(6000);

    const section = new Department();
    department.addEntity(section);
    const worker = new Employee();
    section.addEntity(worker);
    expect(section.showSalary()).toEqual(3000);
    expect(department.showSalary()).toEqual(9000);
  });

  it('should test decorator', () => {
    const woman = new Woman();
    const withCasualClothes = woman.wear();
    expect(withCasualClothes).toEqual('worn casual clothes');

    const clothingStore = new ClothingStore(woman);
    const withScarf = clothingStore.wear();
    expect(withScarf).toEqual('worn casual clothes, scarf');

    const jeweller = new Jeweller(clothingStore);
    const withBracelet = jeweller.wear();
    expect(withBracelet).toEqual('worn casual clothes, scarf, bracelet');
  });

  it('should test facade', () => {
    const firstWaiter = new Waiter();
    expect(firstWaiter.fillOrder()).toEqual('dinner, coffee');

    const cook = new Cook();
    const barista = new Barista();
    const secondWaiter = new Waiter(cook, barista);
    expect(secondWaiter.fillDoubleOrder()).toEqual('dinner x2, coffee x2');
  });

  it('should test proxy', () => {
    const patient = new Patient();
    expect(patient.visitHospital()).toEqual('hospital visited');

    const pandemicPatient = new PandemicPatient(patient);
    expect(pandemicPatient.visitHospital()).toEqual('hands disinfected (access granted), hospital visited');
  });
});

describe('Behavioral patterns', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should test chain of responsibility', () => {
    const cashier = new Cashier();
    const securityGuard = new SecurityGuard();
    const waitress = new Waitress();
    cashier.addNextHandler(securityGuard)
      .addNextHandler(waitress);
    expect(cashier.handle('sell a ticket')).toEqual('cashier sold a ticket');
    expect(cashier.handle('prepare food')).toEqual('waitress prepared food');
    expect(cashier.handle('get a haircut')).toEqual('nobody was able to do that');
    expect(securityGuard.handle('sell a ticket')).toEqual('nobody was able to do that');
  });

  it('should test command', () => {
    const customer = new Customer();
    const cashMachine = new CashMachine(1000);
    customer.setFirstCommand(cashMachine);
    const bankEmployee = new BankEmployee();
    const bank = new Bank(bankEmployee, 'mortgage');
    customer.setSecondCommand(bank);
    const commandsStepByStep = customer.executeCommandsStepByStep();
    expect(commandsStepByStep).toEqual('cash out (1000), sign a contract (mortgage)');
  });

  it('should test mediator', () => {
    const ambulance = new Ambulance();
    expect(ambulance.notifyUnderControl()).toEqual('ambulance is not assign to any dispatch');

    const helicopter = new Helicopter();
    const dispatch = new Dispatch(ambulance, helicopter);
    expect(ambulance.notifyUnderControl()).toEqual('helicopter is not needed');
    expect(helicopter.notifyForBackup()).toEqual('ambulance arrives, helicopter is busy');

    const substituteAmbulance = new Ambulance(dispatch);
    expect(substituteAmbulance.notifyUnderControl()).toEqual('helicopter is not needed');
  });

  it('should test observer', () => {
    const book = new Book();
    const collector = new Collector();
    expect(book.follow(collector)).toEqual('follower started following book');

    const novice = new Novice();
    expect(book.follow(novice)).toEqual('follower started following book');
    expect(book.changePrice(69)).toEqual('collector received notification');
    expect(book.changePrice(49)).toEqual('collector received notification, novice received notification');
    expect(book.unfollow(novice)).toEqual('follower stopped following book');
    expect(book.changePrice(39)).toEqual('collector received notification');
  });

  it('should test specification', () => {

  });

  it('should test state', () => {
    const liquidState = new LiquidState();
    const hydrogenOxide = new HydrogenOxide(liquidState);
    expect(hydrogenOxide.warm()).toEqual('still water');
    expect(hydrogenOxide.cool()).toEqual('ice');
    expect(hydrogenOxide.showName()).toEqual('H2O');

    const solidState = new SolidState();
    hydrogenOxide.changeState(solidState);
    expect(hydrogenOxide.warm()).toEqual('water');
    expect(hydrogenOxide.cool()).toEqual('ice');
    expect(hydrogenOxide.showName()).toEqual('H2O');
  });

  it('should test strategy', () => {
    const defensiveStrategy = new DefensiveStrategy();
    const team = new Team(defensiveStrategy);
    const defensiveLineup = team.prepareLineup();
    expect(defensiveLineup).toEqual(['Pavard', 'Lewandowski']);

    const offensiveStrategy = new OffensiveStrategy();
    team.setStrategy(offensiveStrategy);
    const offensiveLineup = team.prepareLineup();
    expect(offensiveLineup).toEqual(['Kimmich', 'Lewandowski']);
  });

  it('should test template method', () => {

  });

  it('should test visitor', () => {

  });
});
