import { useState } from "react";

const Counter = () => {

    const [state, setState] = useState(0)

    const Increment = () => {
        setState(state+1)
    }

    const Decrement = () => {
        setState(state-1)
    }

    return (
        <>
            <h1>Count: {state} </h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Counter;