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

#### UML diagram:

![abstract-factory](localhost:4200)

#### Client code:

```ts

```

## <a name="adapter">Adapter</a> [structural] [&#8657;](#list)

#### UML diagram:

![adapter](localhost:4200)

#### Client code:

```ts

```

## <a name="bridge">Bridge</a> [structural] [&#8657;](#list)

#### UML diagram:

![bridge](localhost:4200)

#### Client code:

```ts

```

## <a name="builder">Builder</a> [creational] [&#8657;](#list)

#### UML diagram:

![builder](https://user-images.githubusercontent.com/21959354/116831407-7f66c480-abaf-11eb-87b0-29164eaadfd4.png)

#### Client code:

```ts
const director = new Director();
const crew = new Crew();
director.setBuilder(crew);

director.manageBasicVersion();
const basicHouse = crew.putHouseIntoUse();
console.log(basicHouse.getEquipments()); // ["elevator"]

director.managePremiumVersion();
const premiumHouse = crew.putHouseIntoUse();
console.log(premiumHouse.getEquipments()); // ["elevator", "big pool", "small pool"]

crew.buildWithPool('medium');
crew.buildWithElevator();
const customHouse = crew.putHouseIntoUse();
console.log(customHouse.getEquipments()); // ["medium pool", "elevator"]
```

## <a name="chain-of-responsibility">Chain of responsibility</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![chain-of-responsibility](localhost:4200)

#### Client code:

```ts

```

## <a name="command">Command</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![command](localhost:4200)

#### Client code:

```ts

```

## <a name="composite">Composite</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![composite](localhost:4200)

#### Client code:

```ts

```

## <a name="decorator">Decorator</a> [structural] [&#8657;](#list)

#### UML diagram:

![decorator](https://user-images.githubusercontent.com/21959354/116831408-8392e200-abaf-11eb-9310-75823891e931.png)

#### Client code:

```ts
const woman = new Woman();
const withCasualClothes = woman.wear();
console.warn(withCasualClothes); // "wear casual clothes"

const jacket = new Jacket(woman);
const withJacket = jacket.wear();
console.warn(withJacket); // "wear casual clothes, jacket"

const scarf = new Scarf(jacket);
const withScarf = scarf.wear();
console.warn(withScarf); // "wear casual clothes, jacket, scarf"
```

## <a name="facade">Facade</a> [structural] [&#8657;](#list)

#### UML diagram:

![facade](localhost:4200)

#### Client code:

```ts

```

## <a name="factory-method">Factory method</a> [creational] [&#8657;](#list)

#### UML diagram:

![factory-method](localhost:4200)

#### Client code:

```ts

```

## <a name="flyweight">Flyweight</a> [structural] [&#8657;](#list)

#### UML diagram:

![flyweight](localhost:4200)

#### Client code:

```ts

```

## <a name="iterator">Iterator</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![iterator](localhost:4200)

#### Client code:

```ts

```

## <a name="mediator">Mediator</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![mediator](localhost:4200)

#### Client code:

```ts

```

## <a name="memento">Memento</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![memento](localhost:4200)

#### Client code:

```ts

```

## <a name="observer">Observer</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![observer](localhost:4200)

#### Client code:

```ts

```

## <a name="prototype">Prototype</a> [creational] [&#8657;](#list)

#### UML diagram:

![prototype](localhost:4200)

#### Client code:

```ts

```

## <a name="proxy">Proxy</a> [structural] [&#8657;](#list)

#### UML diagram:

![proxy](localhost:4200)

#### Client code:

```ts

```

## <a name="singleton">Singleton</a> [creational] [&#8657;](#list)

#### UML diagram:

![singleton](localhost:4200)

#### Client code:

```ts

```

## <a name="state">State</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![state](localhost:4200)

#### Client code:

```ts

```

## <a name="strategy">Strategy</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![strategy](https://user-images.githubusercontent.com/21959354/116831405-7d046a80-abaf-11eb-82ec-b2c9ea41a953.png)

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

#### UML diagram:

![template-method](localhost:4200)

#### Client code:

```ts

```

## <a name="visitor">Visitor</a> [behavioral] [&#8657;](#list)

#### UML diagram:

![visitor](localhost:4200)

#### Client code:

```ts

```
