export class Animal {
  constructor(
    //private name: string => If  we use private, the inherited child will not be able to access the name property
    //We must use protected so it can be private and inherited
    protected name: string
  ) {}
  move() {
    console.log(`${this.name} is moving`);
  }
}

export class Dog extends Animal {
  constructor(name: string, private _owner: string) {
    super(name);
  }
  //We  can inherit he move method and extend its function
  move() {
    super.move();
    console.log('new dog movement');
  }
  bark() {
    console.log(`${this.name} is barking`);
  }

  get owner() {
    return this._owner;
  }
  set owner(newValue: string) {
    this._owner = newValue;
  }
}

const dog = new Dog('Fido', 'Your name');

console.log(dog.move());
