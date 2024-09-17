import React from "react";
import UseStateButton from "../../components/UseState/Button";
import UseStateCount from "../../components/UseState/Count";
import UseStateInput from "../../components/UseState/Input";
import UseStateList from "../../components/UseState/List";
import UseStateObject from "../../components/UseState/Object";
import FetchingDataState from "../../components/UseState/FetchingData";

const UseStatePage: React.FC = () => {
  return (
    <div className="px-2">
      <h1 className="text-xl font-bold text-center">useState Demo</h1>
      <p>
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mr-1">
          useState
        </span>
        is a Hook in React that allows to add state to functional components. It
        returns an array with two elements: the current state value and a
        function to update that state.
      </p>
      <h2 className="text-l font-semibold pt-2">Toggle State</h2>
      <p>
        The button
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          State
        </span>
        which is change state when is has been clicked.
      </p>
      <UseStateButton />
      <h2 className="text-l font-semibold pt-2">Count State</h2>
      <p>
        The number below is
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          count
        </span>
        which is increase or decrease when the button has been clicked.
      </p>
      <UseStateCount />
      <h2 className="text-l font-semibold pt-2">Input State</h2>
      <p>
        The input field below is
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          string
        </span>
        which is change when the input has been changed.
      </p>
      <UseStateInput />
      <h2 className="text-l font-semibold pt-2">List State</h2>
      <p>
        The list below is list of
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          strings
        </span>
        which is add or remove when the button has been clicked.
      </p>
      <UseStateList />
      <h2 className="text-l font-semibold pt-2">Object State</h2>
      <p>
        The object below is
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          formData
        </span>
        which is change when formData is changed.
      </p>
      <UseStateObject />
      <h2 className="text-l font-semibold pt-2">Fetching State</h2>
      <p>
        The data below is fetched from
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mx-1">
          {"https://api.github.com/users/{login}"}
        </span>
        and displayed below.
      </p>
      <FetchingDataState />
    </div>
  );
};

export default UseStatePage;
