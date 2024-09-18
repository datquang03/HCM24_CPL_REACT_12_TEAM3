import React from "react";

const TypeAnnotationPage: React.FC = () => {
  // Variables
  let counter: number = 1; // Khai báo biến `counter` với kiểu number

  let name: string = "John"; // Biến `name` có kiểu string
  let age: number = 25; // Biến `age` có kiểu number
  let active: boolean = true; // Biến `active` có kiểu boolean

  // Arrays
  let names: string[] = ["John", "Jane", "Peter", "David", "Mary"]; // Mảng chuỗi
  // let numbers: number[] = [1, 2, 3, 4, 5]; // Mảng số

  // Objects
  let person: {
    name: string;
    age: number;
  };

  person = {
    name: "John",
    age: 25,
  }; // valid

  // Functions
  let greeting: (name: string) => string; // Hàm nhận vào tham số name (string) và trả về chuỗi
  greeting = function (name: string) {
    return `Hi ${name}`;
  };

  // Gọi hàm greeting
  const greetMessage = greeting("Peter");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center text-black-600">
        Type Annotations in TypeScript
      </h1>
      <p className="text-lg font-medium text-gray-700 mb-4 pl-2">
        TypeScript uses type annotations to explicitly specify data types for
        identifiers such as variables, functions, objects, etc.
      </p>
      <div className="border border-gray-400 p-4 rounded mb-4 pl-4">
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Counter: {counter}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Name: {name}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Age: {age}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Active: {active ? "Yes" : "No"}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Names: {names.join(", ")}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4 pl-4">
          Greeting: {greetMessage}
        </p>
      </div>
    </div>
  );
};
export default TypeAnnotationPage;
