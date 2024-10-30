import {useState} from "react";

const EvenHandling = props => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Event handling in react Example</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count+5)}>+5</button>
            <button onClick={()=>setCount(!count)}>Null</button>
            <button onClick={()=>setCount(0)}>reset</button>
            </>
    );
}
export default EvenHandling;