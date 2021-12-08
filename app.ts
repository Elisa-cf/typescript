//OBJECTS IN TS

// const person: { name: string; age: number } = {
//   name: "Elisa",
//   age: 35,
// };

// const person = {
//   name: "Elisa",
//   age: 35,
// };
// console.log(person.name);

//ARRAYS IN TS:

// const person = {
//   name: "Elisa",
//   age: 35,
//   hobbies: ["Sports", "Cooking"],
// };

// console.log(person.name);

// STRING TYPE: string[] if everything inside the string is a string

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(favoriteActivities);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

//ANY TYPE: any[] if what is inside it is a mix.

// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 1];

// TUPLES: if you know exactly how many properties and also the type of values, tuples instead of an array
//to get more strictness in to the app. Ex; role: [number, string]

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Elisa",
//   age: 35,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // I want to have an array with exaclty 2 types in there where the first el should
//   //be a number and the second should be a string
// };

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin"]; //=> same structure of role is allowed
// person.role = [0, "admin", "user"];// => not allowed

//ENUM

// first this is how it would be in js code:

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
//   name: "Elisa",
//   age: 35,
//   hobbies: ["Sports", "Cooking"],
//   role: ADMIN,
// };

// if (person.role === ADMIN) {
//   console.log("is admin");
// }

//ENUM example above convert into ENUM: assing labels to numbers

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// to assign another number to admin: ADMIN = 5. After this admin will be 5,and the rest 6, 7 instead of 0,1,2
// also you can define them as you want and then you just need to refer them inside the object, example:
// ADMIN = 'ADMIN'
//   READ_ONLY = 100
//   AUTHOR = 200

const person = {
  name: "Elisa",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is author");
}
