import React, { memo, useCallback, useState } from "react";
import { Button } from "antd";
import "./index.css";

function StateDemo1() {
  const [showConclusion, showConclusionSet] = useState(false);

  const handleShowConclusion = useCallback(() => {
    showConclusionSet(true);
  }, []);

  return (
    <div>
      <div className="text-18 font-500 mb-16">单向数据流</div>
      <div className="flex justify-center">
        <div className="data-flow-01" />
      </div>
      <div className="text-18 font-500 mb-16">
        在React中，state与props的改变，都会引发组件重新渲染。如果是父组件的变化，则父组件下所有子组件都会重新渲染。而在函数式组件中，是整个函数重新执行。
      </div>
      <div className="state-image02 mb-16" />
      <Parent />
      <div className="text-16 mt-16 mb-16">
        思考： 点击按钮后，A组件是否会重新调用？B组件是否会重新调用？
      </div>
      <Button className="mb-16" onClick={handleShowConclusion}>
        结论
      </Button>
      {showConclusion && (
        <div>
          <div className="text-brand text-16 font-500 mb-16">
            在React中，state与props的改变，都会引发函数组件下所有函数子组件重新执行。即使子组件依赖的props并没有变化
          </div>
          <div className="mb-16">
            如果我们需要组件在相同 props
            的情况下渲染相同的结果，那么我们可以使用React.memo
          </div>
          <div className="state-image03 mb-16" />
          <div className="text-16 mb-16">
            组件在React.memo 中调用，react会帮我们记住，只有当props
            变更，组件才会重新渲染。当然，其他因素如state 或 context
            发生变化时，它仍会重新渲染。
          </div>
        </div>
      )}
    </div>
  );
}

export default StateDemo1;

const Parent = () => {
  const [count, countSet] = useState(0);

  const increment = useCallback(() => countSet((pre) => pre + 1), []);

  return (
    <div className="bg-black-15 p-20">
      <div className="mb-16">
        父组件 有一个state count <span className="text-brand">{count}</span>
      </div>
      <ChildA count={count} />
      <ChildB />
      <ChildC />
      <Button onClick={increment}>add count</Button>
    </div>
  );
};

const ChildA = (props) => {
  const { count } = props;
  console.log("ChildA call");

  return (
    <div className="mb-16 bg-black-15 p-20">
      A组件
      <span className="ml-8 text-brand">{count}</span>
    </div>
  );
};

const ChildB = () => {
  console.log("ChildB call");
  return <div className="mb-16 bg-black-25 p-20">B组件</div>;
};

const ChildC = memo(() => {
  console.log("ChildC call");
  return <div className="mb-16 bg-black-25 p-20">C组件</div>;
});
