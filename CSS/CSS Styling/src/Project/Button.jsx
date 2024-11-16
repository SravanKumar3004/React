import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FunctionComp from "./function";
import ClassComp from "./class";

const Button = () => {
  const [showFunction, setShowFunction] = useState(false);
  const [showClass, setShowClass] = useState(false);

  const toogleFunction = () => {
    setShowFunction(!showFunction);
  };

  const toogleClass = () => {
    setShowClass(!showClass);
  };

  return (
    <div>
      <button className="btn btn-success m-10" onClick={toogleFunction}>
        Functional
      </button>
      <button className="btn btn-warning" onClick={toogleClass}>
        Classcomp
      </button>

      {showFunction && <FunctionComp />}
      {showClass && <ClassComp />}
    </div>
  );
};

export default Button;
