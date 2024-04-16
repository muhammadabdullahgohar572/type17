


// @ts-ignore

// const sum = (num1: number, num2: number): number => {
//     return num1 + num2;
// }

// console.log(sum(5, 10));

// let num = 10;

// let num1 = num + 20;

// console.log(num1);

// let Name: string = "My name is abdullah and My father name is safdar"

// let id = Name.length;

// console.log(id)

// let uper: string = "ABDULLAH"

// let upercase = uper.toUpperCase()

// let lowercase = uper.toLowerCase()
// console.log(upercase + 1);
// console.log(lowercase + 2);

// let Name: boolean = true;

// let Father: boolean = true;

// let school: boolean = false;

// const isEven = (a: number): boolean => {
//     return a % 2 === 5
// }

// console.log(isEven(4))

// let Maxnumber = Number.MAX_SAFE_INTEGER;

// let num: bigint = BigInt(9007199254740991);

// let num1: bigint = num + 2n;

// console.log(num1);

// let num: bigint = BigInt(9007199254740991);

// let Num = BigInt("90071992547409915")

// let sum = num + Num;
// console.log("Add" + sum);

// let sum1 = num - Num;
// console.log("Sum" + sum1);

// let sum1: any = 5;

// sum1 = "45";

// console.log(sum1);

// let num: unknown;
// num = 5;
// num = "abdullah";
// num = true;
// if (typeof num === "number") {
//     console.log(num + 5);

// }

// @ts-ignore
// const nam = (name: string, id: number): void => {
//     console.log(`My name is ${name} and my id is ${id}`);

// }

// nam("abdullah", 1);

// const Numfun = (Value: string): boolean => {
//     let mynum = Value.split("").reverse().join()
//     let test = mynum === Value;
//     return test;
// }
// console.log(Numfun("123621"));

// let nam: unknown = "abdullah";
// nam = 4;

// console.log(nam);

// const value = (name: string, id?: number): string => {
//     if (id) {
//         return `My name is ${name} and my id is ${id}`
//     } else {
//         return `else`
//     }
// }

// const data = (value("abdullah"))
// const data1 = (value("abdullah", 5))

// console.log(data1);

// console.log(data);

// const Arry1:number[]=[1,2,3,4,5,6];

// const Arry2=new Array(1,2,3,4,5,6);

// const Arry3=Array.of(1,2,3,4,5,6)

// console.log(Arry1.length);

// const fruitArrays = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Grapes",
//     "Strawberry"
// ];

// const Data = fruitArrays.push("Kiwi");

// const NewData = fruitArrays.pop()

// console.log(fruitArrays);

// for (let i = 0; i < fruitArrays.length; i++) {
//     console.log(fruitArrays[i]);

// }

// for (const Data of fruitArrays) {
//     console.log(Data);

// }

// fruitArrays.forEach((Data:string)=>{
// console.log(Data);

// })
// const DataArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const NewData: number[] = DataArray.map((item) =>
//     item + 2
// )
// const NewData: string[] = DataArray.map((item: number) =>
//     item.toString()
// )
// console.log(NewData);

// const DataArray: { id: number, name: string, age: number }[] =
//     [

//         { id: 1, name: "abdullah", age: 16 },
//         { id: 2, name: "ali", age: 22 },
//         { id: 3, name: "Umer", age: 83 },
//         { id: 4, name: "Raza", age: 43 },
//         { id: 5, name: "Anus", age: 59 },
//         { id: 6, name: "Dua", age: 76 },
//         { id: 7, name: "Wasif", age: 87 },
//         { id: 8, name: "test", age: 18 },

//     ];

// for (const iterator of DataArray) {
//     console.log(iterator);

// }
// const Data = DataArray.filter((item) => {
//     return item.age > 55

// }).map((item) => {

//     if (item.age > 55) {
//         return item.name
//     }

// })

// console.log(Data);

/////////////[]

// type Person = {
//     name: string,
//     age: number,
//     Student: boolean,
//     address: {
//         city: string,
//         country: string;
//     }
//     Class?: string
// }

// const person: Person = {
//     name: "abdullah",
//     age: 18,
//     Student: true,
//     address: {
//         city: "karachi",
//         country: "pakistan"
//     }
// }

// const person1: Person = {
//     name: "Ali",
//     age: 18,
//     Student: true,
//     address: {
//         city: "karachi",
//         country: "pakistan"
//     }
// }

// const person2: Person = {
//     name: "Raza",
//     age: 18,
//     Student: true,
//     address: {
//         city: "karachi",
//         country: "pakistan"
//     }
// }

// // console.log(person.address.city);

// type Data = {
//     ItemName: string;
//     Quantity: number;
//     Price: number;
// }

// const Name = {
//     ItemName: "Pencil",
//     Quantity: 200,
//     Price: 20
// }

// const Information = (Name: Data) => {
//     return `This is My Product Name ${Name.ItemName} And This MY profit ${Name.Price * Name.Quantity}`
// }

// console.log(Information(Name));

/////////////[]

/////////////[]

// type Student = {
//   name: string;
//   age: number;
//   gender?: number;
//   Country: (country: string) => string;
// };

// const Name: Student = {
//   name: "abdullah",
//   age: 18,
//   Country: function (country: string): string {
//     return `My name is ${this.name} and my age is ${this.age} and ${country}`;
//   },
// };

// const Introduction: (student: Student) => string = (
//   student: Student
// ): string => {
//   const { name, age } = student;
//   return `My name is ${name} and my age is ${age}`;
// };

// console.log(Introduction(Name));
// console.log(Name.Country("pakistan"));

/////////////[]

// type StudentData = {
//   name: string;
//   Fname: string;
//   gender: string;
//   age: number;
//   city?: string;
//   Country: (Country: string) => string;
// };

// const Student1: StudentData = {
//   name: "Abdullah",
//   Fname: "Safdar",
//   gender: "Male",
//   age: 18,
//   Country: function (country: string): string {
//     return `My name is ${this.name} and my age is ${this.age} and ${country}`;
//   },
// };

// const Result: (student: StudentData) => string = (
//   student: StudentData
// ): string => {
//   const { name, Fname, age } = student;
//   return `This is My name ${name}and This is My Father name ${Fname} and this is My age ${age}`;
// };

// console.log(Result(Student1));
// console.log(Student1.Country("pakistan"));

// const Student2: StudentData = {
//   name: "Umer",
//   Fname: "Ali",
//   gender: "Male",
//   age: 17,
// };

/////////////[]
// type StudentData = {
//   name: string;
//   Fname: string;
//   gender: string;
//   age: number;
//   city?: string;
//   Country:(Country:string)=>string
// };

// const Student: StudentData = {
//   name: "Abdullah",
//   Fname: "Safdar",
//   gender: "Male",
//   age: 18,
//   Country:function (Country:string):string {
//     return `My name is ${this.name} and My Father name is ${this.Fname} and My age is ${this.age} and My country name is ${Country}`
//   }
// };

// const Result:(student:StudentData)=>string=(student:StudentData):string=>{

//   const {name,age,Fname}=student;
//   return `My name is ${name} and My Father name is ${Fname} and My age is ${age}`

// }

// console.log(Student.Country("pakistan"));

/////////////[]

// enum Roles {
//   user = "user",
//   admin = "admin",
// }

// type User = {
//   name?: string;
//   email: string;
//   password: string;
//   role: Roles;
// };

// const Login1: User = {
//   name: "abdullah",
//   email: "abdullah2@gamil.com",
//   password: "1234",
//   role: Roles.user,
// };

// const Login2: User = {
//   name: "abdullah",
//   email: "abdullah2@gamil.com",
//   password: "1234",
//   role: Roles.admin,
// };

// const Admincheak: (Login1: User) => string = (user: User): string => {
//   {
//     const { name, role } = user;
//     return role === "admin"
//       ? `This is a name user ${name} and this is admin ${role}`
//       : `This is a name user  not ${name} and this is admin ${role}`;
//   }
// };

// console.log(Admincheak(Login1));
// console.log(1);
// console.log(Admincheak(Login2));

/////////////[]

// enum Roles {
//   user = "user",
//   admin = "admin",
// }

// type Data = {
//   name: string;
//   Emial: string;
//   passwords: string;
//   user: Roles;
// };

// const Login1: Data = {
//   name: "Abdullah",
//   Emial: "ABDULLAH1234@gmail.com",
//   passwords: "1234545454",
//   user: Roles.admin,
// };
// const Login2: Data = {
//   name: "Ali",
//   Emial: "ABDULLAH1234@gmail.com",
//   passwords: "1234545454",
//   user: Roles.user,
// };

// const Result:(Login1:Data)=>string=(userr:Data):string=>{
//   {
//     const { name, user } = userr;
//     return user === "admin"
//       ? `This is a name user ${name} and this is admin ${user}`
//       : `This is a name user  not ${name} and this is ${user}`;
//   }
// }

// console.log(Result(Login2));






/////////////[]

// type UserData = readonly [string, number, boolean];

// const namee: (person: UserData) => void = (person: UserData): void => {
//   const [name, age, drives] = person;
//   console.log(
//     `This is the Name of the user: ${name}, Age: ${age}, Drives: ${
//       drives ? "Yes" : "No"
//     }`
//   );
// };

// const person1: UserData = ["ABDULLAH", 18, true];
// const person2: UserData = ["UMER", 18, false];
// const person3: UserData = ["ANUS", 18, true];

// namee(person1);
// namee(person2);
// namee(person3);

type userData=[string,number,boolean];

// const namee: (person: UserData) => void = (person: UserData): void => {
const nam:(persan:userData)=>void=(person:userData):void=>{
  const [name,age,drives]=person;
  console.log(
    `This is the Name of the user: ${name}, Age: ${age}, Drives: ${
      drives ? "Yes" : "No"
    }`
  );
}

const person1: userData = ["ABDULLAH", 18, true];
const person2: userData = ["UMER", 18, false];
const person3: userData = ["ANUS", 18, true];

nam(person1);
nam(person2);
nam(person3)





