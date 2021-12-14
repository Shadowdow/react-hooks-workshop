import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Sider from "./components/sider";
import StateDemo1 from "./components/stateLesson/demo1";
import StateDemo2 from "./components/stateLesson/demo2";
import StateDemo3 from "./components/stateLesson/demo3";
import StateDemo4 from "./components/stateLesson/demo4";
import StateDemo5 from "./components/stateLesson/demo5";
import EffectDemo1 from "./components/effectLesson/demo1";
import EffectDemo2 from "./components/effectLesson/demo2";
import EffectDemo3 from "./components/effectLesson/demo3";
import EffectDemo4 from "./components/effectLesson/demo4";
import RefDemo1 from "./components/refLesson/demo1";
import MemoDemo1 from "./components/memoLesson/demo1";
import ContextDemo1 from "./components/contextLesson";
import ReducerDemo1 from "./components/reducerLesson";

export default function App() {
    return (
        <Router>
            <div className='flex'>
                <Sider/>
                <div className="p-32 flex-1">
                    <Routes>
                        <Route path="/state-demo1" element={<StateDemo1/>}/>
                        <Route path="/state-demo2" element={<StateDemo2/>}/>
                        <Route path="/state-demo3" element={<StateDemo3/>}/>
                        <Route path="/state-demo4" element={<StateDemo4/>}/>
                        <Route path="/state-demo5" element={<StateDemo5/>}/>
                        <Route path="/effect-demo1" element={<EffectDemo1/>}/>
                        <Route path="/effect-demo2" element={<EffectDemo2/>}/>
                        <Route path="/effect-demo3" element={<EffectDemo3/>}/>
                        <Route path="/effect-demo4" element={<EffectDemo4/>}/>
                        <Route path="/useRef-demo1" element={<RefDemo1/>}/>
                        <Route path="/useMemo-demo1" element={<MemoDemo1/>}/>
                        <Route path="/useContext-demo1" element={<ContextDemo1/>}/>
                        <Route path="/useReducer-demo1" element={<ReducerDemo1/>}/>
                        <Route path="/" element={<div>Home</div>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}