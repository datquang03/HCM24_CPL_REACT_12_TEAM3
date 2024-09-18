const ContextConcept = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          useContext Hook
        </h1>
        <p className="text-gray-700 mb-4">
          <strong>Concept:</strong> useContext is a React Hook that lets you
          read and subscribe to context from your component.
        </p>
        <p className="text-gray-700 mb-4">
          With context, you don't need to pass data through each component
          level. Instead, the data is provided once via
          <code className="bg-gray-200 p-1 rounded-md">
            {" "}
            Context.Provider{" "}
          </code>{" "}
          and child components can directly access the data using
          <code className="bg-gray-200 p-1 rounded-md"> useContext </code>.
        </p>
        <h2 className="text-xl font-medium mt-4 mb-2 text-gray-800">Usage:</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Manage state globally</li>
          <li>Share state or data between components</li>
        </ul>
        <h2 className="text-xl font-medium mt-4 mb-2 text-gray-800">
          Example:
        </h2>
        <p className="text-gray-700">
          Below is a simple example demonstrating how to use the{" "}
          <code className="bg-gray-200 p-1 rounded-md">useContext</code> hook in
          a React application.
        </p>
      </div>
    </div>
  );
};

export default ContextConcept;
