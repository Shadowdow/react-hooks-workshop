import React from "react";
import HooksMenu from "./Menu";
import { Route, Routes } from "react-router-dom";
import WhyHooksLesson1 from "./WhyHooks/lesson1";
import WhyHooksLesson2 from "./WhyHooks/lesson2";
import WhyHooksLesson3 from "./WhyHooks/lesson3";
import UseStateLesson1 from "./UseState/lesson1";
import UseEffectLesson1 from "./UseEffect/lesson1";
import UseEffectLesson2 from "./UseEffect/lesson2";
import ExtraLesson from "./UseState/extraLesson";
import UseMemoLesson from "./UseMemo/lesson1";
import UseCallBackLesson from "./UseCallBack";
import UseMemoLesson2 from "./UseMemo/lessson2";
import WhyHooksLesson4 from "./WhyHooks/lesson4";
import UseStateLesson2 from "./UseState/lesson2";
import UseStateLesson3 from "./UseState/lesson3";
import UseRefLesson1 from "./UseRef/lesson1";
import UseRefLesson2 from "./UseRef/lesson2";
import Summary from "./Summary";
import UseStatePracticeDemo from "./UseState/practice";
import UseEffectPractice from "./UseEffect/practice";
import UseMemoPractice from "./UseMemo/practice";
import UseCallbackPractice from "./UseCallBack/practice";
import UseRefPractice from "./UseRef/practice";

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
          <Route path="useState/practice" element={<UseStatePracticeDemo />} />
          <Route path="useState/extraLesson" element={<ExtraLesson />} />
          <Route path="useEffect/lesson1" element={<UseEffectLesson1 />} />
          <Route path="useEffect/lesson2" element={<UseEffectLesson2 />} />
          <Route path="useEffect/practice" element={<UseEffectPractice />} />
          <Route path="useMemo/lesson1" element={<UseMemoLesson />} />
          <Route path="useMemo/lesson2" element={<UseMemoLesson2 />} />
          <Route path="useMemo/practice" element={<UseMemoPractice />} />
          <Route path="useCallback/lesson1" element={<UseCallBackLesson />} />
          <Route
            path="useCallback/practice"
            element={<UseCallbackPractice />}
          />
          <Route path="useRef/lesson1" element={<UseRefLesson1 />} />
          <Route path="useRef/lesson2" element={<UseRefLesson2 />} />
          {/*<Route path="useRef/practice" element={<UseRefPractice />} />*/}
          <Route path="summary/lesson1" element={<Summary />} />
        </Routes>
      </div>
    </>
  );
};

export default HookTheory;
