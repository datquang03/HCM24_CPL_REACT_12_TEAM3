import { Route, Routes } from "react-router-dom";
import UseStatePage from "../pages/useState/useState";
import UseEffectPage from "../pages/useEffect/useEffect";
import UseContextPage from "../pages/useContext/useContext";
import UseReducerPage from "../pages/useReducer/useReducer";
import UseRefPage from "../pages/useRef/useRef";
import UseMemo from "../pages/useMemo/useMemo";
import UseCallbackPage from "../pages/useCallback/useCallback";
import TypeAnnotationPage from "../pages/typeAnnotation/typeAnnotation";
import InterfacePage from "../pages/interface/interface";
import GenericsPage from "../pages/generics/generics";
import UnionTypesPage from "../pages/unionTypes/unionTypes";
import EnumPage from "../pages/enum/enum";

const RouterPages = () => {
  return (
    <Routes>
      <Route path="/useState" element={<UseStatePage />} />
      <Route path="/useEffect" element={<UseEffectPage />} />
      <Route path="/useContext" element={<UseContextPage />} />
      <Route path="/useReducer" element={<UseReducerPage />} />
      <Route path="/useRef" element={<UseRefPage />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallbackPage />} />
      <Route path="/typeAnnotation" element={<TypeAnnotationPage />} />
      <Route path="/interface" element={<InterfacePage />} />
      <Route path="/generics" element={<GenericsPage />} />
      <Route path="/unionTypes" element={<UnionTypesPage />} />
      <Route path="/enum" element={<EnumPage />} />
    </Routes>
  );
};

export default RouterPages;
