import React from "react";
import "./External.css";
import styles from './External.module.css'

class ClassComp extends React.Component {
    render () {
        return (
          <div className="border border-black border-5 my-5 py-5 w-50 ms-3">
            <h1 className={`color fonts`}>External using Class</h1>
            <h1 style={{color: "violet"}}>Internal using Class</h1>
            <h1 className={styles.cl}>Module using Class</h1>
            <h1 className="text-secondary">Bootstrap using Class</h1>
            <h1 className="text-blue-600">Tailwind using Class</h1>
          </div>
        );
    }
}

export default ClassComp;
