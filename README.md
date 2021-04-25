# <a name="list">Design patterns in TypeScript</a>

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

![builder](https://user-images.githubusercontent.com/21959354/116004525-5bc9da00-a603-11eb-8326-be829c2c53f1.png)

#### Client code:

```ts
const foreman = new Foreman();
const constructionCrew = new ConstructionCrew();
foreman.setBuilder(constructionCrew);

foreman.buildBasicVersion();
constructionCrew.putHouseIntoUse().showEquipments();

foreman.buildPremiumVersion();
constructionCrew.putHouseIntoUse().showEquipments();

constructionCrew.buildWithPool('5 feet');
constructionCrew.buildWithElevator();
constructionCrew.putHouseIntoUse().showEquipments();
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

![decorator](https://user-images.githubusercontent.com/21959354/116004520-57052600-a603-11eb-9d84-f5417c2f2bec.png)

#### Client code:

```ts
const woman = new Woman();
woman.wear();

const jeweller = new Jeweller(woman);
jeweller.wear();

const clothingStore = new ClothingStore(jeweller);
clothingStore.wear();
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

![strategy](localhost:4200)

#### Client code:

```ts

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
