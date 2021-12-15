import {useCallback, useState} from "react";
import {Button} from "antd";

function StateDemo3() {
    // 利用数组解构的方式接收状态名及其设置方法,这个状态可以为任何值
    const [arr, arrSet] = useState(['apple', 'orange']);

   const setArrWithOldObj = useCallback(()=> {
       // TODO: 把banana加到水果列表去（直接改引用）
   }, [arr]);

    const setArrWithNewObj = useCallback(()=> {
        // TODO: 把banana加到水果列表去（直接改引用）
    }, [arr]);

   return (
    <div>
        <div className="text-18 font-500 mb-16">useState利用闭包，在函数内部创建一个当前函数组件的状态。并提供一个修改该状态的方法</div>
        <div className="text-18 font-500 mb-16">该状态可以是任意类型，字符串，数字，也可以是对象，数组。字符串，数字我们就不谈了。这里我们聊一下状态是引用类型的时候应该注意什么东西</div>
        <ul>
            {
                arr.map((fruits)=> <li key={fruits}>{fruits}</li>)
            }
        </ul>
        <Button className="mr-12 mt-12" onClick={setArrWithOldObj}>直接改引用</Button>
        <Button onClick={setArrWithNewObj}>生成新引用</Button>
    </div>
  );
}

export default StateDemo3;