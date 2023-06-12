//To create the class just one time so it is not created many times we use Singleton from SOLID principles
//This is used for example in nestjs to create just one instance and a global access point thoughout the application
//The main use of this is to save memory
export class MyService {
  //We create the instance to create the service
  static instance: MyService | null = null;

  private constructor(private name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    //This will just execute once because only the first time it is NUll
    if (MyService.instance == null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const service = MyService.create('instance 1');
console.log(service.getName()); //Expected output: instance 1

const service2 = MyService.create('instance 2');
console.log(service2.getName()); //Expected output: instance 1

//As we can apppretiate we create just one instance of the class, and from there we re-use the instance
