
function getFirstElement<T>(array: T[]) {
  return array[0];
}

const GenericsPage = () => {
  const numbers: number[] = [1, 2, 3];
  const firstNum = getFirstElement(numbers);

  const strings: string[] = ["Apple", "Banana", "Cherry"];
  const firstString = getFirstElement(strings);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold mb-6 text-center text-black-600">Generics</h1>
      <p>In TypeScript, Generics are a feature that allows you to create <strong>functions, 
        classes, or interfaces</strong> that can work with different <strong>types of data</strong> while maintaining type safety.</p>
      <h2 className="text-l font-semibold pt-2">Result of example code:</h2>
      <h2 className="text-l font-semibold pt-2">First Element of Numbers Array:</h2>
      <p>{firstNum}</p>
      <br/>
      <h2 className="text-l font-semibold pt-2">First Element of Strings Array:</h2>
      <p>{firstString}</p>
    </div>
  );
};

export default GenericsPage;
