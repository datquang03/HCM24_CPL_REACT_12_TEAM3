import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const navigationPath = (path: string) => {
    navigate(path);
  };

  const handleToggleButtons = () => {
    setShowAdditionalButtons((prevState) => !prevState);
  };

  return (
    <div className="navbar-container">
      <div className="buttons-container">
        {!showAdditionalButtons ? (
          <>
            <button
              className="buttons"
              onClick={() => navigationPath("/useState")}
            >
              useState Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useEffect")}
            >
              useEffect Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useContext")}
            >
              useContext Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useReducer")}
            >
              useReducer Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useRef")}
            >
              useRef Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useMemo")}
            >
              useMemo Demo
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/useCallback")}
            >
              useCallback Demo
            </button>
            <button className="buttons" onClick={handleToggleButtons}>
              Phần 1
            </button>
          </>
        ) : (
          <>
            <button
              className="buttons"
              onClick={() => navigationPath("/typeAnnotation")}
            >
              Type Annotation
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/interface")}
            >
              Interface
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/generics")}
            >
              Generics
            </button>
            <button
              className="buttons"
              onClick={() => navigationPath("/unionTypes")}
            >
              Union Types
            </button>
            <button className="buttons" onClick={() => navigationPath("/enum")}>
              Enum
            </button>
            <button className="buttons" onClick={handleToggleButtons}>
              Phần 2
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
