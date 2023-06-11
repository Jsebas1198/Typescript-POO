//Creating our own Date class

//this is an example  of a class

const date = new Date();

//we can access its methods
date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getDay();
console.log(date.getTime());

//We can also give values to the Date class
const date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

//We can also create a class

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
