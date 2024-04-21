// @ts-ignore

// const Test: (value: string | number | boolean) => void = (
//   value: string | number | string
// ): void => {};

// Test(55);
// Test("abdullah");
// Test(false);

// console.log(Test);

// const If: (value: string | number) => string | number = (
//   value: string | number
// ): string | number => {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   } else {
//     throw new Error("Inviold Input Data");
//   }
// };

// console.log(If(5));
// console.log(If("abdullah"));

// type Person = {
//   name: string;
//   Age: number;
// };

// type Employee = {
//   emp_id: number;
//   department: string;
// };

// type EmployeeDetail = Person | Employee;

// const Data: EmployeeDetail = {
//   name: "Abdullah",
//   Age: 18,
// };

// type Person = {
//   name: string;
//   Age: number;
// };

// type Locational = {
//   Country: string;
//   city: string;
// };

// const DataPersanl: (user: Person, Person: Locational) => string = (
//   user: Person,
//   Person: Locational
// ): string => {
//   return `This Is my name ${user.name} and My age is ${user.Age} and This my age city ${Person.city} and This is My country ${Person.Country}`;
// };

// const Name: Person = {
//   name: "Abdullah",
//   Age: 18,
// };

// const Fname: Locational = {
//   Country: "pakistan",
//   city: "karachi",
// };

// console.log(DataPersanl(Name, Fname));

/////////////[]

// type Person = {
//   name: string;
//   Age: number;
// };

// type Locational = {
//   Country: string;
//   city: string;
// };

// const DataPersanl: (user: Person, Person: Locational) => Person & Locational = (
//   user: Person,
//   Person: Locational
// ): Person & Locational => {
//   return { ...user, ...Person };
// };

// const Name: Person = {
//   name: "Abdullah",
//   Age: 18,
// };

// const Fname: Locational = {
//   Country: "pakistan",
//   city: "karachi",
// };

// const UserData: Person & Locational = DataPersanl(Name, Fname);

// console.log(UserData);
/////////////[]

// const Test = <T>(agr: T): T => {
//   return agr;
// };

// const one = Test(45);

// const Two = Test("abdllah");

// console.log(one, Two);
/////////////[]

// const Test = <T,u>(a: T, b?: u): any => {
//   console.log(typeof a, typeof b);
//   return a;
// };

// const Result = Test("4", true);

// interface Greet {
//   name: string;
//   Quntity: number;
//   Preice: 20;
// }

// const greet: Greet = {
//   name: "pencil",
//   Quntity: 5,
//   Preice: 20,
// };

// const Data: (products: Greet) => string = (products: Greet): any => {
//   const { Quntity, Preice } = products;

//   return `This is Item name ${products.name} and This is a Quantity ${Quntity} and this is a Item Price ${ Preice }. Total: ${Quntity *  Preice }`;

// };

// console.log(Data(greet));
/////////////[]

// class person {
//   Name: string;
//   age: number;
//   hobbies: string[];

//   constructor(Name: string, age: number, hobbies: string[]) {
//     this.Name = Name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }

// const perso: person = new person("abdullah", 18, ["book", "read"]);

// console.log(perso);
/////////////[]

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   intro(): string {
//     return `Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies.join(
//       ","
//     )}`;
//   }
// }

// class studends extends Person {
//   greed: string;

//   constructor(name: string, age: number, hobbies: string[], greed: string) {
//     super(name, age, hobbies);
//     this.greed = greed;
//   }

//   intro(): string {
//     return `${super.intro()}, Greed: ${this.greed}`;
//   }
// }

// const perso: Person = new Person("abdullah", 18, ["book", "read"]);
// const perso1: Person = new studends("Test", 88, ["book", "read"], "ok");

// console.log(perso1.intro());

/////////////[]

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   Test(): string {
//     return `This is a name ${this.name} and THIS is a age ${
//       this.age
//     } and my hobbies is ${this.hobbies.join(",")} `;
//   }
// }

// class Students extends Person {
//   garde: string;

//   constructor(name: string, age: number, hobbies: string[], garde: string) {
//     super(name, age, hobbies);
//     this.garde = garde;
//   }

//   Test(): string {
//     return ` ${super.Test()} and ${this.age} This  is a grade ${this.garde}`;
//   }
// }

// const perso1 = new Person("abdullah", 18, ["read", "book"]);
// const perso2 = new Students("abdullah", 18, ["read", "book"], "A");

// console.log(perso2.Test());
// // console.log(perso1);
/////////////[]

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public hobbies: string[]
//   ) {}

//   introp(): string {
//     return `My name is ${this.name} and my age is ${
//       this.age
//     } and my hobbies is ${this.hobbies.join(",")} `;
//   }
// }

// class Student extends Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public hobbies: string[],
//     public grade: string
//   ) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introc(): string {
//     return `${super.introp()} and my garde is ${this.grade}`;
//   }
// }

// const person12: Person = new Person("aa", 18, ["aa", "aa"]);
// const Student1: Student = new Student(
//   "abdullah",
//   18,
//   ["test", "codeing"],
//   "ok"
// );

// // console.log(person12.introp());

// console.log(Student1.introc());
/////////////[]

// class Person {
//   private _age: number | undefined;
//   constructor(public name: string, public hobbies: string[]) {}
//   public set age(age: number) {
//     if (age > 100 || age < 0) {
//       throw new Error("This a is inviod");
//     }
//     this._age = age;
//   }
//   public get age(): number {
//     if (this._age === undefined) {
//       throw new Error("This a is undefined");
//     } else {
//       return this._age;
//     }
//   }
//   introp(): string {
//     return `My name is ${this.name} and my age is ${
//       this._age
//     }  and my hobbies is ${this.hobbies.join(",")} `;
//   }
// }

// const person12: Person = new Person("abdullah", ["coding", "book"]);
// person12.age = 71;
// console.log(person12.introp());

/////////////[]

// class Test {
//   public set age(age: number) {
//     if (age > 510 || age < 0) {
//       throw new Error("This a age inviold this catagre");
//     } else {
//       this._age12 = age;
//     }
//   }

//   public get age(): number {
//     if (this._age12 === undefined) {
//       throw new Error("This a is undefined");
//     } else {
//       return this._age12;
//     }
//   }

//   constructor(
//     public name: string,
//     private _age12: number | undefined,
//     public hobbies: string[]
//   ) {}

//   intro(): string {
//     return `My name is ${this.name} and my  ${
//       this._age12
//     } is  and my hobbies is ${this.hobbies.join(",")} `;
//   }
// }

// const Data1: Test = new Test("abdullah", 18, ["codding", "Book"]);
// Data1.age = 71;
// console.log(Data1.intro());

/////////////[]

// class BankingAccount {
//   private _Blance: number = 0;

//   public get blance(): number {
//     return this._Blance;
//   }

//   public set blance(newblance: number) {
//     this._Blance = newblance;
//     if (newblance < 0) {
//       throw new Error("Your Account Blance is Zero");
//     } else {
//       this._Blance = newblance;
//     }
//   }
// }

// const acount=new BankingAccount()

// acount.blance=10;

// console.log(acount.blance);

// class  Temperature{
//   private _Celsius:number=0;

//   public get Celsius():number{
//      return this._Celsius;
//   }

//   public set Celsius(newCelsius:number){
//       this._Celsius=newCelsius
//   }

//   public get Fahrenheit():number{
// return (this._Celsius*9)/5*32
//   }

//   public set Fahrenheit(newFah:number){
//     this._Celsius=((newFah-32)*5)/9
//   }
// }

// const tem:any=new Temperature();

// tem.Celsius=25;

// console.log(tem.Fahrenheit);

// class Test {
//   private _Celsius: number = 0;

//   public get Celsius(): number {
//     return this._Celsius;
//   }

//   public set Celsius(newCelsius: number) {
//     this._Celsius = newCelsius;
//   }

//   public get Fahrenheit(): number {
//     return ((this._Celsius * 9) / 5) * 32;
//   }

//   public set Fahrenheit(newFah:number){
//     this._Celsius=((newFah-32)*5)/9
//   }

// }
// const temp=new Test();
// temp.Celsius=25;
// console.log(temp.Fahrenheit);
