import ComponentsProps from "../../components/UnionType/ComponentsProps";
import EventHandling from "../../components/UnionType/EventHandling";
import FunctionParameters from "../../components/UnionType/FunctionParameters";

const UnionTypesPage = () => {
  return (
    <div className="px-2">
      <h1 className="text-xl font-bold text-center">Union Type Demo</h1>
      <p>
        Union types in TypeScript are versatile and can be used in various
        scenarios to enhance type safety and flexibility.
      </p>
      <h2 className="text-l font-semibold pt-2">Syntax</h2>
      <p>
        The syntax for a union type is to separate the types with a pipe (
        <span className="bg-slate-200 rounded-md px-1 pb-1 ">|</span>)
        character.
      </p>
      <h2 className="text-l font-semibold pt-2">Example</h2>
      <p >
        <span className="text-blue-600">let</span> value:{" "}
        <span className="text-cyan-600">string</span> |{" "}
        <span className="text-cyan-600">number</span>;
      </p>
      <h2 className="text-l font-semibold pt-2">Function Parameter</h2>
      <p>
        The input field below accepts either a number or a string. The entered
        value is displayed below the input field.
      </p>
      <p>
        If the entered value is a number, it is formatted to two decimal places.
      </p>
      <p>If the entered value is a string, it is converted to uppercase.</p>
      <FunctionParameters />
      <h2 className="text-l font-semibold pt-2">Props in React Components</h2>
      <p>
        The button below is a React component that accepts a label, an onClick
        function, and an optional disabled prop. The disabled prop can be a
        boolean or a string.
      </p>
      <ComponentsProps
        className="mt-2 px-2 py-1 border border-slate-400 rounded-md"
        label="Button"
        onClick={() => {}}
        disabled="false"
      />
      <ComponentsProps
        className="ml-2 px-2 py-1 border border-red-400 rounded-md cursor-not-allowed"
        label="Button"
        onClick={() => {}}
        disabled={true}
      />
      <h2 className="text-l font-semibold pt-2">Event Handling</h2>
      <p>
        The two buttons below trigger an event on the dummy button. The dummy
        button changes its state when it receives the event.
      </p>
      <EventHandling />
    </div>
  );
};

export default UnionTypesPage;
