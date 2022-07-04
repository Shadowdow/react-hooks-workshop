import React from "react";
import HooksMenu from "./Menu";
import { Route, Routes } from "react-router-dom";
import WhyHooksLesson1 from "./WhyHooks/lesson1";
import WhyHooksLesson2 from "./WhyHooks/lesson2";
import WhyHooksLesson3 from "./WhyHooks/lesson3";
import WhyHooksLesson4 from "./WhyHooks/lesson4";
import UseStateLesson1 from "./UseState/lesson1";
import UseStateLesson2 from "./UseState/lesson2";
import UseStateLesson3 from "./UseState/lesson3";
import UseStateLesson4 from "./UseState/lesson4";
import UseEffectLesson1 from "./UseEffect/lesson1";
import UseEffectLesson2 from "./UseEffect/lesson2";
import UseEffectLesson3 from "./UseEffect/lesson3";
import UseContextLesson from "./UseContext";
import UseReducerLesson from "./UseReducer";
import UseEffectPractice from "./UseEffect/practice";
import UseReducerPractice from "./UseReducer/practice";
import UseStatePractice from "./Practice/useState/practice";
import UseCallbackPractice from "./Practice/useCallback/practice";
import UseMemoPractice from "./Practice/useMemo/practice";

const HookTheory = () => {
  return (
    <>
      <HooksMenu />
      <div className="p-32 flex-1 ml-40">
        <Routes>
          <Route path="why-hooks/lesson1" element={<WhyHooksLesson1 />} />
          <Route path="why-hooks/lesson2" element={<WhyHooksLesson2 />} />
          <Route path="why-hooks/lesson3" element={<WhyHooksLesson3 />} />
          <Route path="why-hooks/lesson4" element={<WhyHooksLesson4 />} />

          <Route path="useState/lesson1" element={<UseStateLesson1 />} />
          <Route path="useState/lesson2" element={<UseStateLesson2 />} />
          <Route path="useState/lesson3" element={<UseStateLesson3 />} />
          <Route path="useState/lesson4" element={<UseStateLesson4 />} />
          <Route path="useEffect/lesson1" element={<UseEffectLesson1 />} />
          <Route path="useEffect/lesson2" element={<UseEffectLesson2 />} />
          <Route path="useEffect/lesson3" element={<UseEffectLesson3 />} />
          <Route path="useEffect/practice" element={<UseEffectPractice />} />
          <Route path="useContext/lesson1" element={<UseContextLesson />} />
          <Route path="useReducer/lesson1" element={<UseReducerLesson />} />
          <Route path="useReducer/practice" element={<UseReducerPractice />} />
          <Route path="practice/useState" element={<UseStatePractice />} />
          {/*<Route path="practice/useEffect" element={<UseEffectPractice />} />*/}
          <Route
            path="practice/useCallback"
            element={<UseCallbackPractice />}
          />
          <Route path="practice/useMemo" element={<UseMemoPractice />} />
          <Route path="practice/useReducer" element={<UseReducerPractice />} />
        </Routes>
      </div>
    </>
  );
};

export default HookTheory;
