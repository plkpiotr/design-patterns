# <a name="list">Design patterns in TypeScript with PlantUML diagrams</a>

| ⬜ Creational | 🟨 Structural | 🟥 Behavioral | Assumption: |
| :---- | :---- | :---- | :---- |
| [Abstract factory](#abstract-factory) | [Adapter](#adapter) | [Chain of responsibility](#chain-of-responsibility) | Client code with output for each pattern |
| [Builder](#builder) | [Bridge](#bridge)  | [Command](#command) | `console` functions only in the client code |
| [Factory method](#factory-method) | [Composite](#composite) | [Mediator](#mediator) | PlantUML diagram for each pattern |
| [Fluent interface](#fluent-interface) | [Decorator](#decorator) | [Observer](#observer) | Classes used in the client code marked in UML |
| [Singleton](#singleton) | [Facade](#facade) | [Specification](#specification) | Classes/interfaces from one pattern in one folder |
| | [Proxy](#proxy) | [State](#state) | Almost all classes/interfaces in separate files |
| | | [Strategy](#strategy) | Angular as ecosystem (easy to launch and test) |
| | | [Template method](#template-method) | All patterns presented in `AppComponent` |
   
---

## <a name="abstract-factory">Abstract factory</a> [creational] [&#8657;](#list)

Abstract factory allows you to create related objects without specifying them concrete classes.

#### UML diagram:

![abstract-factory](https://user-images.githubusercontent.com/21959354/117216441-0f9b4880-ae00-11eb-9c6d-124a2d7d4192.png)

#### Client code:

```ts
const retroFactory = new RetroFactory();
const retroChair = retroFactory.createChair();
const retroTable = retroFactory.createTable();
console.log(retroTable.showRegularOffer()); // "retro table itself costs $499"
console.log(retroTable.showSpecialOffer(retroChair)); // "retro table with any chair cost $599, retro chair itself costs $199"

const modernFactory = new ModernFactory();
const modernTable = modernFactory.createTable();
console.log(modernTable.showRegularOffer()); // "modern table itself costs $399"
console.log(modernTable.showSpecialOffer(retroChair)); // "modern table with any chair cost $499, retro chair itself costs $199"
```

## <a name="adapter">Adapter</a> [structural] [&#8657;](#list)

Adapter allows you to adapt an object with incompatible interface to another one.

#### UML diagram:

![adapter](https://user-images.githubusercontent.com/21959354/118035037-00217f80-b36b-11eb-9778-1f3cf0284ed1.png)

#### Client code:

```ts
const movie = new Movie();
console.warn(movie.displayVGA()); // [640, 480]

const remake = new Remake();
console.warn(remake.displayHD()); // [1920, 1080]

const adaptedRemake = new Adapter(remake);
console.warn(adaptedRemake.displayVGA()); // [640, 360]
```

## <a name="bridge">Bridge</a> [structural] [&#8657;](#list)

Bridge allows you to divide complicated class into its abstraction and implementation.

#### UML diagram:

![bridge](https://user-images.githubusercontent.com/21959354/119388794-10225300-bccb-11eb-9cd4-6f8329f2ef9f.png)

#### Client code:

```ts
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
```

## <a name="builder">Builder</a> [creational] [&#8657;](#list)

Builder allows you to create objects in stages.

#### UML diagram:

![builder](https://user-images.githubusercontent.com/21959354/117540257-a0e00a00-b00e-11eb-93e8-91d3a5668dfc.png)

#### Client code:

```ts
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
```

## <a name="chain-of-responsibility">Chain of responsibility</a> [behavioral] [&#8657;](#list)

Chain of responsibility allows you to handle a request based on a defined process.

#### UML diagram:

![chain-of-responsibility](https://user-images.githubusercontent.com/21959354/119389839-7360b500-bccc-11eb-8c20-93eee5dd86fd.png)

#### Client code:

```ts
const cashier = new Cashier();
const securityGuard = new SecurityGuard();
const waitress = new Waitress();
cashier.addNextHandler(securityGuard)
  .addNextHandler(waitress);
console.error(cashier.handle('sell a ticket')); // "cashier sold a ticket"
console.error(cashier.handle('prepare food')); // "waitress prepared food"
console.error(cashier.handle('get a haircut')); // "nobody was able to do that"
console.error(securityGuard.handle('sell a ticket')); // "nobody was able to do that"
```

## <a name="command">Command</a> [behavioral] [&#8657;](#list)

Command allows you to parameterize objects using requests and execute them in a specific order.

#### UML diagram:

![command](https://user-images.githubusercontent.com/21959354/119740083-8e295a00-be83-11eb-9a9e-a461d0479028.png)

#### Client code:

```ts
const customer = new Customer();
const cashMachine = new CashMachine(1000);
customer.setFirstCommand(cashMachine);
const bankEmployee = new BankEmployee();
const bank = new Bank(bankEmployee, 'mortgage');
customer.setSecondCommand(bank);
const commandsStepByStep = customer.executeCommandsStepByStep();
console.error(commandsStepByStep); // "cash out (1000), sign a contract (mortgage)"
```

## <a name="composite">Composite</a> [behavioral] [&#8657;](#list)

Composite allows you to treat distinct entities like nested objects.

#### UML diagram:

![composite](https://user-images.githubusercontent.com/21959354/120085875-12761a00-c0dc-11eb-9f2a-a2b46a977b95.png)

#### Client code:

```ts
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
```

## <a name="decorator">Decorator</a> [structural] [&#8657;](#list)

Decorator allows you to add a new functionality to existing classes by wrapping the original code.

#### UML diagram:

![decorator](https://user-images.githubusercontent.com/21959354/119391397-955b3700-bcce-11eb-8761-f321b1ee81b2.png)

#### Client code:

```ts
const woman = new Woman();
const withCasualClothes = woman.wear();
console.warn(withCasualClothes); // "worn casual clothes"

const clothingStore = new ClothingStore(woman);
const withScarf = clothingStore.wear();
console.warn(withScarf); // "worn casual clothes, scarf"

const jeweller = new Jeweller(clothingStore);
const withBracelet = jeweller.wear();
console.warn(withBracelet); // "worn casual clothes, scarf, bracelet"
```

## <a name="facade">Facade</a> [structural] [&#8657;](#list)

Facade allows you to separate out external logic from complex logic.

#### UML diagram:

![facade](https://user-images.githubusercontent.com/21959354/119241025-05917d80-bb54-11eb-9751-a1a7ad90f2db.png)

#### Client code:

```ts
const firstWaiter = new Waiter();
console.warn(firstWaiter.fillOrder()); // "dinner, coffee"

const cook = new Cook();
const barista = new Barista();
const secondWaiter = new Waiter(cook, barista);
console.warn(secondWaiter.fillDoubleOrder()); // "dinner x2, coffee x2"
```

## <a name="factory-method">Factory method</a> [creational] [&#8657;](#list)

Factory method allows you to create objects using subclasses that can change the type of created object.

#### UML diagram:

![factory-method](https://user-images.githubusercontent.com/21959354/117355413-d7087700-aeb2-11eb-861c-0faedd2e674b.png)

#### Client code:

```ts
const painterStudio = new PainterStudio();
const painting = painterStudio.createMasterpiece();
console.log(painting); // "created a painting"

const sculptorStudio = new SculptorStudio();
const sculpture = sculptorStudio.createMasterpiece();
console.log(sculpture); // "created a sculpture"
```

## <a name="fluent-interface">Fluent interface</a> [creational] [&#8657;](#list)

Fluent interface allows you to create and edit objects using method chaining.

#### UML diagram:

![fluent-interface](https://user-images.githubusercontent.com/21959354/120074699-59ddb580-c09e-11eb-806a-32ed5304c9c0.png)

#### Client code:

```ts
const album = new Label().withName('Recovery')
  .withTracks(['Not Afraid', 'On Fire'])
  .release();

const deluxeAlbum = new Label(album).withTracks(['Not Afraid', 'On Fire', 'So Bad'])
  .release();

console.log(album); // Album { name: "Recovery", tracks: ["Not Afraid", "On Fire"] }
console.log(deluxeAlbum); // Album { name: "Recovery", tracks: ["Not Afraid", "On Fire", "So Bad"] }
```

## <a name="mediator">Mediator</a> [behavioral] [&#8657;](#list)

Mediator allows you to define a class responsible for communication between components.

#### UML diagram:

![mediator](https://user-images.githubusercontent.com/21959354/120051271-41c75100-c020-11eb-81a7-5df0a2d6012c.png)

#### Client code:

```ts
const ambulance = new Ambulance();
console.error(ambulance.notifyUnderControl()); // "ambulance is not assign to any dispatch"

const helicopter = new Helicopter();
const dispatch = new Dispatch(ambulance, helicopter);
console.error(ambulance.notifyUnderControl()); // "helicopter is not needed"
console.error(helicopter.notifyForBackup()); // "ambulance arrives, helicopter is busy"

const substituteAmbulance = new Ambulance(dispatch);
console.error(substituteAmbulance.notifyUnderControl()); // "helicopter is not needed"
```

## <a name="observer">Observer</a> [behavioral] [&#8657;](#list)

Observer allows you to define a class responsible for subscription mechanism.

#### UML diagram:

![observer](https://user-images.githubusercontent.com/21959354/120075203-9a3e3300-c0a0-11eb-9902-56bd6cc07e19.png)

#### Client code:

```ts
const book = new Book();
const collector = new Collector();
console.error(book.follow(collector)); // "follower started following book"

const novice = new Novice();
console.error(book.follow(novice)); // "follower started following book"
console.error(book.changePrice(69)); // "collector received notification"
console.error(book.changePrice(49)); // "collector received notification, novice received notification"
console.error(book.unfollow(novice)); // "follower stopped following book"
console.error(book.changePrice(39)); // "collector received notification"
```

## <a name="proxy">Proxy</a> [structural] [&#8657;](#list)

Proxy allows you to add a new functionality to existing class and control access to it.

#### UML diagram:

![proxy](https://user-images.githubusercontent.com/21959354/120033575-07e45380-bffc-11eb-97bd-0900b707f866.png)

#### Client code:

```ts
const patient = new Patient();
console.warn(patient.visitHospital()); // "hospital visited"

const pandemicPatient = new PandemicPatient(patient);
console.warn(pandemicPatient.visitHospital()); // "hands disinfected (access granted), hospital visited"
```

## <a name="singleton">Singleton</a> [creational] [&#8657;](#list)

Singleton allows you to have only one instance of a class and provide global access to it.

#### UML diagram:

![singleton](https://user-images.githubusercontent.com/21959354/117360177-c0fdb500-aeb8-11eb-9a47-6f2a1bf01acc.png)

#### Client code:

```ts
const king = King.getInstance();
const sameKing = King.getInstance();

console.log(king === sameKing); // true
console.log(king.showKingName()); // "Louis XX"
console.log(sameKing.showKingName()); // "Louis XX"
```

## <a name="specification">Specification</a> [behavioral] [&#8657;](#list)

Specification allows you to combine business logic with boolean logic.

#### UML diagram:

![specification](https://user-images.githubusercontent.com/21959354/120378101-4d679000-c31e-11eb-8023-15648d504531.png)

#### Client code:

```ts
const firstSpecification = new GreaterThan(2);
console.error(firstSpecification.isSatisfiedBy(3)); // true
console.error(firstSpecification.isSatisfiedBy(5)); // true

const secondSpecification = new LessThan(4);
const thirdSpecification = firstSpecification.and(secondSpecification);
console.error(thirdSpecification.isSatisfiedBy(3)); // true
console.error(thirdSpecification.isSatisfiedBy(5)); // false

const fourthSpecification = thirdSpecification.not();
console.error(fourthSpecification.isSatisfiedBy(3)); // false
console.error(fourthSpecification.isSatisfiedBy(5)); // true
```

## <a name="state">State</a> [behavioral] [&#8657;](#list)

State allows you to change object behavior when its internal state changes.

#### UML diagram:

![state](https://user-images.githubusercontent.com/21959354/120085981-03439c00-c0dd-11eb-9a1c-fac06d5d8837.png)

#### Client code:

```ts
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
```

## <a name="strategy">Strategy</a> [behavioral] [&#8657;](#list)

Strategy allows you to define a family of algorithms encapsulating them in the form of separate classes.

#### UML diagram:

![strategy](https://user-images.githubusercontent.com/21959354/120085683-77307500-c0da-11eb-8bba-aa0d3ee4381e.png)

#### Client code:

```ts
const defensiveStrategy = new DefensiveStrategy();
const team = new Team(defensiveStrategy);
const defensiveLineup = team.prepareLineup();
console.error(defensiveLineup); // ["Pavard", "Lewandowski"]

const offensiveStrategy = new OffensiveStrategy();
team.setStrategy(offensiveStrategy);
const offensiveLineup = team.prepareLineup();
console.error(offensiveLineup); // ["Kimmich", "Lewandowski"]
```

## <a name="template-method">Template method</a> [behavioral] [&#8657;](#list)

Template method allows you to define skeleton of an algorithm and further specify it in subclasses.

#### UML diagram:

![template-method](https://user-images.githubusercontent.com/21959354/120238801-3e6cd900-c25d-11eb-96f7-eb468e35e868.png)

#### Client code:

```ts
const hawaiianPizza = new HawaiianPizza();
console.error(hawaiianPizza.templateMethod()); // "dough, sauce, cheddar, ham, pineapple"

const mexicanPizza = new MexicanPizza();
console.error(mexicanPizza.templateMethod()); // "dough, sauce, mozzarella, beef, jalapenos, hot ketchup"
```
