# <a name="list">Real-life design patterns with PlantUML diagrams</a>

| Creational | Structural | Behavioral |
| :----: | :----: | :----: |
| [Abstract factory](#abstract-factory) | [Adapter](#adapter) | [Chain of responsibility](#chain-of-responsibility) |
| [Builder](#builder) | [Bridge](#bridge)  | [Command](#command) |
| [Factory method](#factory-method) | [Composite](#composite) | [Iterator](#iterator) |
| [Fluent interface](#fluent-interface) | [Decorator](#decorator) | [Mediator](#mediator) |
| [Singleton](#singleton) | [Facade](#facade) | [Memento](#memento) |
| | [Flyweight](#flyweight) | [Observer](#observer) |
| | [Proxy](#proxy) | [State](#state) |
| | | [Strategy](#strategy) |
| | | [Template method](#template-method) |
| | | [Visitor](#visitor) |

---

## <a name="abstract-factory">Abstract factory</a> [creational] [&#8657;](#list)

Abstract factory provides an interface to create objects from specific family.

#### UML diagram:

![abstract-factory](https://user-images.githubusercontent.com/21959354/117216441-0f9b4880-ae00-11eb-9c6d-124a2d7d4192.png)

#### Client code:

```ts
const retroFactory = new RetroFactory();
const retroChair = retroFactory.createChair();
const retroTable = retroFactory.createTable();
console.log(retroTable.showRegularOffer()); // "retro table itself costs $499"
console.log(retroTable.showSpecialOffer(retroChair)); // "retro table with any chair costs $599, retro chair itself costs $199"

const modernFactory = new ModernFactory();
const modernTable = modernFactory.createTable();
console.log(modernTable.showRegularOffer()); // "modern table itself costs $399"
console.log(modernTable.showSpecialOffer(retroChair)); // "modern table with any chair costs $499, retro chair itself costs $199"
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

Bridge allows you to divide complicated class into its abstraction and implementation (to prevent creation of multiple redundant classes).

#### UML diagram:

![bridge](https://user-images.githubusercontent.com/21959354/119036023-92033b00-b9b0-11eb-95e6-c5cdb6a96a16.png)

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

Builder provides an interface to create objects in stages.

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

None

#### UML diagram:

![chain-of-responsibility](localhost:4200)

#### Client code:

```ts

```

## <a name="command">Command</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![command](localhost:4200)

#### Client code:

```ts

```

## <a name="composite">Composite</a> [behavioral] [&#8657;](#list)

Composite allows you to treat distinct entities like nested objects.

#### UML diagram:

![composite](https://user-images.githubusercontent.com/21959354/119236312-0536b980-bb37-11eb-99ce-95230e0f1d60.png)

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

Decorator allows you to add a new functionality to an existing class.

#### UML diagram:

![decorator](https://user-images.githubusercontent.com/21959354/117216445-10cc7580-ae00-11eb-8dec-f275c4ba28af.png)

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

None

#### UML diagram:

![facade](localhost:4200)

#### Client code:

```ts

```

## <a name="factory-method">Factory method</a> [creational] [&#8657;](#list)

Factory method provides an interface to create objects using subclasses.

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

![fluent-interface](https://user-images.githubusercontent.com/21959354/117581265-3ad1b080-b0fc-11eb-9b88-453de1791c33.png)

#### Client code:

```ts
const album = new Label().withName('Recovery')
  .withTracks(['Not Afraid', 'On Fire'])
  .release();

const deluxeAlbum = new Label(album).withTracks(['Not Afraid', 'On Fire', 'So Bad'])
  .release();

console.log(album); // Album {name: "Recovery", tracks: ["Not Afraid", "On Fire"]}
console.log(deluxeAlbum); // Album {name: "Recovery", tracks: ["Not Afraid", "On Fire", "So Bad"]}
```

## <a name="flyweight">Flyweight</a> [structural] [&#8657;](#list)

None

#### UML diagram:

![flyweight](localhost:4200)

#### Client code:

```ts

```

## <a name="iterator">Iterator</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![iterator](localhost:4200)

#### Client code:

```ts

```

## <a name="mediator">Mediator</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![mediator](localhost:4200)

#### Client code:

```ts

```

## <a name="memento">Memento</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![memento](localhost:4200)

#### Client code:

```ts

```

## <a name="observer">Observer</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![observer](localhost:4200)

#### Client code:

```ts

```

## <a name="proxy">Proxy</a> [structural] [&#8657;](#list)

None

#### UML diagram:

![proxy](localhost:4200)

#### Client code:

```ts

```

## <a name="singleton">Singleton</a> [creational] [&#8657;](#list)

Singleton allows you to have only one instance of a class and provides global access to it.

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

## <a name="state">State</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![state](localhost:4200)

#### Client code:

```ts

```

## <a name="strategy">Strategy</a> [behavioral] [&#8657;](#list)

Strategy defines a family of algorithms (for a given context) encapsulating them in the form of separated classes.

#### UML diagram:

![strategy](https://user-images.githubusercontent.com/21959354/117216438-0e6a1b80-ae00-11eb-85d4-4d5d8d90cc81.png)

#### Client code:

```ts
const team = new Team(new DefensiveStrategy());
const defensiveLineup = team.prepareLineup();
console.error(defensiveLineup); // ["Pavard", "Lewandowski"]

team.setStrategy(new OffensiveStrategy());
const offensiveLineup = team.prepareLineup();
console.error(offensiveLineup); // ["Kimmich", "Lewandowski"]
```

## <a name="template-method">Template method</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![template-method](localhost:4200)

#### Client code:

```ts

```

## <a name="visitor">Visitor</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![visitor](localhost:4200)

#### Client code:

```ts

```
