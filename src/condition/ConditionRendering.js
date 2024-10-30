import {useState} from "react";


const ConditionRendering =()=>{
    const [islogin, setIslogin] = useState(false);

    return (
        <>
            <p>{islogin ? "Welcome user" : "Please login user"}</p>
            <button onClick={() => setIslogin(!islogin)}>Log In</button>
        </>
    );
}
export default ConditionRendering;