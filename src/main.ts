console.log('Hello, World!');


// this is show me variable is take the number or string both thing
// var name: (string | number) = "shaharyar";
// console.log(name);

// this is show the array of string and number
// var arr:(string | number)[]= [1, 2, 3, 5, 6];
// arr.push("11");
// arr.push(9);
// console.log(arr);       

// this is show how obj behave on typescript
// let obj: {name: string, age:number, email?: string}={
//   name: "shaharyar",
//   age: 23,
//   email: "",
// }
// obj.email="shaharyar@gmail.com"
// console.log(obj);

const num1 = document.getElementById("inputOne")! as HTMLInputElement;
const num2 = document.getElementById("inputTwo")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;


function sumUp(n1: number, n2: number): number {
  return n1 + n2;
}


btn?.addEventListener('click', () => {
  console.log('Sum = ', sumUp(Number(num1.value), Number(num2.value)));

})



