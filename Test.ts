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

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  Test(): string {
    return `This is a name ${this.name} and THIS is a age ${
      this.age
    } and my hobbies is ${this.hobbies.join(",")} `;
  }
}

class Students extends Person {
  garde: string;

  constructor(name: string, age: number, hobbies: string[], garde: string) {
    super(name, age, hobbies);
    this.garde = garde;
  }

  Test(): string {
    return ` ${super.Test()} This  is a grade ${this.garde}`;
  }
}

const perso1 = new Person("abdullah", 18, ["read", "book"]);
const perso2 = new Students("abdullah", 18, ["read", "book"], "A");

console.log(perso2.Test());
