export class MyDate {
  //This would be the properties of a class
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Here we are creating a method
  //A method would be a funtion inside a class
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate.printFormat());
