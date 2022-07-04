import { Route, Routes } from "react-router-dom";
import React from "react";
import StateDemo1 from "./stateLesson/demo1";
import StateDemo2 from "./stateLesson/demo2";
import StateDemo4 from "./stateLesson/demo4";
import StateDemo5 from "./stateLesson/demo5";
import StatePractice from "./stateLesson/Practice";
import EffectDemo1 from "./effectLesson/demo1";
import EffectDemo2 from "./effectLesson/demo2";
import EffectDemo3 from "./effectLesson/demo3";
import EffectDemo4 from "./effectLesson/demo4";
import EffectDemo5 from "./effectLesson/demo5";
import RefDemo1 from "./refLesson/demo1";
import RefPractice from "./refLesson/Practice";
import MemoDemo1 from "./memoLesson";
import CallbackDemo1 from "./callbackLesson";
import CallbackPractice from "./callbackLesson/Practice";
import UseMemoPractice from "./memoLesson/Practice";
import ContextDemo1 from "./contextLesson";
import ReducerDemo1 from "./reducerLesson";
import CustomHooks from "./customHooks";
import CustomHookPractice from "./customHooks/Practice";
import Sider from "../../components/sider";

const HookBestEvent = () => {
  return (
    <>
      <Sider />
      <div className="p-32 flex-1 ml-40">
        <Routes>
          <Route path="state-demo1" element={<StateDemo1 />} />
          <Route path="state-demo2" element={<StateDemo2 />} />
          <Route path="state-demo4" element={<StateDemo4 />} />
          <Route path="state-demo5" element={<StateDemo5 />} />
          <Route path="state-Practice" element={<StatePractice />} />
          <Route path="effect-demo1" element={<EffectDemo1 />} />
          <Route path="effect-demo2" element={<EffectDemo2 />} />
          <Route path="effect-demo3" element={<EffectDemo3 />} />
          <Route path="effect-demo4" element={<EffectDemo4 />} />
          <Route path="effect-demo5" element={<EffectDemo5 />} />
          <Route path="useRef-demo1" element={<RefDemo1 />} />
          <Route path="useRef-practice" element={<RefPractice />} />
          <Route path="useMemo-demo1" element={<MemoDemo1 />} />
          <Route path="useCallback-demo1" element={<CallbackDemo1 />} />
          <Route path="useCallback-practice" element={<CallbackPractice />} />
          <Route path="useMemo-practice" element={<UseMemoPractice />} />
          <Route path="useContext-demo1" element={<ContextDemo1 />} />
          <Route path="useReducer-demo1" element={<ReducerDemo1 />} />
          <Route path="customHooks-demo1" element={<CustomHooks />} />
          <Route path="customHooks-practice" element={<CustomHookPractice />} />
        </Routes>
      </div>
    </>
  );
};

export default HookBestEvent;
