# <a name="list">Real-life design patterns with PlantUML diagrams</a>

| Creational | Structural | Behavioral |
| :----: | :----: | :----: |
| [Abstract factory](#abstract-factory) | [Adapter](#adapter) | [Chain of responsibility](#chain-of-responsibility) |
| [Builder](#builder) | [Bridge](#bridge)  | [Command](#command) |
| [Factory method](#factory-method) | [Composite](#composite) | [Iterator](#iterator) |
| [Prototype](#prototype) | [Decorator](#decorator) | [Mediator](#mediator) |
| [Singleton](#singleton) | [Facade](#facade) | [Memento](#memento) |
| | [Flyweight](#flyweight) | [Observer](#observer) |
| | [Proxy](#proxy) | [State](#state) |
| | | [Strategy](#strategy) |
| | | [Template method](#template-method) |
| | | [Visitor](#visitor) |

---

## <a name="abstract-factory">Abstract factory</a> [creational] [&#8657;](#list)

None

#### UML diagram:

![abstract-factory](localhost:4200)

#### Client code:

```ts

```

## <a name="adapter">Adapter</a> [structural] [&#8657;](#list)

None

#### UML diagram:

![adapter](localhost:4200)

#### Client code:

```ts

```

## <a name="bridge">Bridge</a> [structural] [&#8657;](#list)

None

#### UML diagram:

![bridge](localhost:4200)

#### Client code:

```ts

```

## <a name="builder">Builder</a> [creational] [&#8657;](#list)

Builder provides an interface to create objects in stages.

#### UML diagram:

![builder](https://user-images.githubusercontent.com/21959354/116998398-7294be80-acde-11eb-94db-0f02afdb9849.png)

#### Client code:

```ts
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

None

#### UML diagram:

![composite](localhost:4200)

#### Client code:

```ts

```

## <a name="decorator">Decorator</a> [structural] [&#8657;](#list)

Decorator allows you to add a new functionality to an existing class.

#### UML diagram:

![decorator](https://user-images.githubusercontent.com/21959354/116998401-73c5eb80-acde-11eb-9d32-cb9b4966d9a1.png)

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

![factory-method](https://user-images.githubusercontent.com/21959354/116998399-732d5500-acde-11eb-8bc3-728b144ac3ed.png)

#### Client code:

```ts
const painterStudio = new PainterStudio();
const painting = painterStudio.createMasterpiece();
console.log(painting); // "created a painting"

const sculptorStudio = new SculptorStudio();
const sculpture = sculptorStudio.createMasterpiece();
console.log(sculpture); // "created a sculpture"
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

## <a name="prototype">Prototype</a> [creational] [&#8657;](#list)

None

#### UML diagram:

![prototype](localhost:4200)

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

None

#### UML diagram:

![singleton](localhost:4200)

#### Client code:

```ts

```

## <a name="state">State</a> [behavioral] [&#8657;](#list)

None

#### UML diagram:

![state](localhost:4200)

#### Client code:

```ts

```

## <a name="strategy">Strategy</a> [behavioral] [&#8657;](#list)

Strategy defines a family of algorithms (for a given context) encapsulated them in the form of separated classes.

#### UML diagram:

![strategy](https://user-images.githubusercontent.com/21959354/116998395-71fc2800-acde-11eb-960a-7ae273b17463.png)

#### Client code:

```ts
const team = new Team(new DefensiveStrategy());
const defensiveLineup = team.prepareLineup();
console.error(defensiveLineup); // ["Tia", "Rocket"]

team.setStrategy(new OffensiveStrategy());
const offensiveLineup = team.prepareLineup();
console.error(offensiveLineup); // ["Ahito", "Rocket"]
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
