//By default the properties and methods are public

export class MyDate {
  //This would be the properties of a class
  year: number;

  //We can set an attribute to private and have access to ir trough a method
  private month: number;

  //Public is set by default, like this
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Here we are creating a method
  //A method would be a funtion inside a class
  printFormat(): string {
    const day = this.addPadding(this.day); //Here we are using the private method
    const month = this.addPadding(this.month); //Here we are using the private method
    return `${day}/${month}/${this.year}`;
  }

  //Here we are creating a private method because it would no have sense to have access to it outside the class
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //With this method we can access the month value
  getMonth() {
    return this.month;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate.printFormat());

//If  it is public we can access its properties like this
console.log(myDate.day);

//We can also modify its value
myDate.day = 12;

//We can access month by the method we create
console.log(myDate.getMonth());
