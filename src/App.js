import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Sider from "./components/sider";
import StateDemo1 from "./pages/stateLesson/demo1";
import StateDemo2 from "./pages/stateLesson/demo2";
import StateDemo4 from "./pages/stateLesson/demo4";
import StateDemo5 from "./pages/stateLesson/demo5";
import StatePractice from "./pages/stateLesson/Practice";
import EffectDemo1 from "./pages/effectLesson/demo1";
import EffectDemo2 from "./pages/effectLesson/demo2";
import EffectDemo3 from "./pages/effectLesson/demo3";
import EffectDemo4 from "./pages/effectLesson/demo4";
import EffectDemo5 from "./pages/effectLesson/demo5";
import RefDemo1 from "./pages/refLesson/demo1";
import RefPractice from "./pages/refLesson/Practice";
import MemoDemo1 from "./pages/memoLesson";
import UseMemoPractice from "./pages/memoLesson/Practice";
import ContextDemo1 from "./pages/contextLesson";
import ReducerDemo1 from "./pages/reducerLesson";
import CallbackDemo1 from "./pages/callbackLesson";
import CallbackPractice from "./pages/callbackLesson/Practice";
import CustomHooks from "./pages/customHooks";
import CustomHookPractice from "./pages/customHooks/Practice";

export default function App() {
    return (
        <Router>
            <div className='flex'>
                <Sider/>
                <div className="p-32 flex-1">
                    <Routes>
                        <Route path="/state-demo1" element={<StateDemo1/>}/>
                        <Route path="/state-demo2" element={<StateDemo2/>}/>
                        <Route path="/state-demo4" element={<StateDemo4/>}/>
                        <Route path="/state-demo5" element={<StateDemo5/>}/>
                        <Route path="/state-Practice" element={<StatePractice/>}/>
                        <Route path="/effect-demo1" element={<EffectDemo1/>}/>
                        <Route path="/effect-demo2" element={<EffectDemo2/>}/>
                        <Route path="/effect-demo3" element={<EffectDemo3/>}/>
                        <Route path="/effect-demo4" element={<EffectDemo4/>}/>
                        <Route path="/effect-demo5" element={<EffectDemo5/>}/>
                        <Route path="/useRef-demo1" element={<RefDemo1/>}/>
                        <Route path="/useRef-practice" element={<RefPractice/>}/>
                        <Route path="/useMemo-demo1" element={<MemoDemo1/>}/>
                        <Route path="/useCallback-demo1" element={<CallbackDemo1/>}/>
                        <Route path="/useCallback-practice" element={<CallbackPractice/>}/>
                        <Route path="/useMemo-practice" element={<UseMemoPractice/>}/>
                        <Route path="/useContext-demo1" element={<ContextDemo1/>}/>
                        <Route path="/useReducer-demo1" element={<ReducerDemo1/>}/>
                        <Route path="/customHooks-demo1" element={<CustomHooks/>}/>
                        <Route path="/customHooks-practice" element={<CustomHookPractice/>}/>
                        <Route path="/" element={<div>Home</div>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}