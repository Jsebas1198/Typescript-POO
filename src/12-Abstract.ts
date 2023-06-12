//We can restrict the creation of an instance of Animal, and just allow the creation of its childs
//This can be made by the word "abstract"

export abstract class Animal {
  constructor(protected name: string) {}
  move() {
    console.log(`${this.name} is moving`);
  }
}

export class Dog extends Animal {
  constructor(name: string, private _owner: string) {
    super(name);
  }

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

//This would be an error because cannot create an instance of an abstract class
//const animal = new Animal('Cat');

//But we can create instances of its childs
const dog = new Dog('Fido', 'Your name');

console.log(dog.move());
