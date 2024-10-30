import React from 'react';
import ReactDOM from 'react-dom/client';
// import ClassComponent from "./component/ClassComponent";
// import Welcome from "./component/Welcome";
// import FunctionComponentUsingArrowFunction from "./component/FunctionComponentUsingArrowFunction";
// import Mf, {One,Two} from "./Export/One";
// import User from "./state/User";
// import EvenHandling from "./Event/EvenHandling";
import ConditionRendering from "./condition/ConditionRendering";

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            {/*<ClassComponent namee="hengg"/>*/}
            {/*<Welcome />*/}
            {/*<Welcome/>*/}
            {/*<Welcome/>*/}
            {/*<FunctionComponentUsingArrowFunction name="heng"/>*/}
            {/*<One/>*/}
            {/*<Two/>*/}
            {/*<Mf/>*/}
            {/*<User/>*/}
            {/*<EvenHandling/>*/}
            <ConditionRendering/>


    </React.StrictMode>
);