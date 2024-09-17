import React, { useState } from "react";
import typeImage from '/src/assets/typeImage.jpg';
import interfaceImage from '/src/assets/interfaceImage.jpg';
import typeMerge from '/src/assets/typeMerge.jpg';
import interfaceMerge from '/src/assets/interfaceMerge.jpg';

interface Person {
  name: string;
  age: number;
  active: boolean;
}
const InterfacePage: React.FC = () => {
  const [name, setName] = useState<string>(""); // Chuỗi trống ban đầu
  const [age, setAge] = useState<number | string>(0); // Số 0 ban đầu, sử dụng kiểu number hoặc string
  const [active, setActive] = useState<boolean>(false); // Trạng thái ban đầu là false
  const [person, setPerson] = useState<Person | null>(null); // Biến person có thể là kiểu Person hoặc null

  // Hàm xử lý khi submit form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Chuyển giá trị `age` thành 0 nếu người dùng chưa nhập
    const parsedAge = age === "" ? 0 : Number(age);

    const newPerson: Person = {
      name,
      age: parsedAge,
      active,
    };

    setPerson(newPerson);
  };

  // Hàm xử lý khi input "Age" được focus
  const handleFocus = () => {
    if (age === 0) {
      setAge("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center text-black-600">Interface and Type</h1>
      <p className="text-lg font-medium text-gray-700 mb-4">
        Typescript has 3 main types:
      </p>
      <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
        <li>Any kind</li>
        <li>Integrated type</li>
        <li>User-defined type</li></ul>
      <ul className=" list-inside mb-4 text-red-500">
        <li className="font-bold">Interfaces and Types fall under the 3rd category - User-Defined Types.</li>
      </ul>

      <p className="text-lg font-medium text-gray-700 mb-4">
        Declare
      </p>
      <img src={typeImage} alt="type" className="mx-auto mb-4" />
      <img src={interfaceImage} alt="interface" className="mx-auto mb-4" />

      <p className="text-lg font-medium text-gray-700 mb-4">
        Interfaces can be merged while Types cannot
      </p>
      <img src={interfaceMerge} alt="interface" className="mx-auto mb-4" />
      <img src={typeMerge} alt="type" className="mx-auto mb-4" />
      <ul className=" list-inside mb-4 text-red-500">
        <li className="font-bold">Error : Duplicate identifier 'Shape'.</li>
      </ul>


      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Person Information</h1>

          {/* Form nhập liệu */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name: </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age: </label>
              <input
                type="number"
                id="age"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={age}
                onFocus={handleFocus} // Xử lý khi người dùng trỏ chuột vào
                onChange={(e) => setAge(e.target.value)} // Chuyển đổi giá trị thành chuỗi
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="active" className="block text-gray-700 font-semibold mb-2">Active: </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="active"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
                <label htmlFor="active" className="ml-2 text-gray-600">Active User</label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Hiển thị kết quả sau khi người dùng nhập */}
          {person && (
            <div className="mt-8 bg-gray-50 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Person Information</h2>
              <p><strong>Name:</strong> {person.name}</p>
              <p><strong>Age:</strong> {person.age}</p>
              <p><strong>Active:</strong> {person.active ? "Yes" : "No"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterfacePage;
