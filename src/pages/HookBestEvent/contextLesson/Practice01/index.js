import React, {useCallback, useState} from 'react';
import {Button} from "antd";

import '../index.css';

function Parent() {
    const [count, countSet] = useState(0);

    const addCount = useCallback(()=> {
        countSet((pre)=> pre + 1)
    }, []);

   return (
       <div className="mb-16 bg-black-15 p-16 inline-block mr-32">
           <div className="mb-16">
               <div className="text-16 mb-16 text-brand">props传递</div>
               <div className='mb-16'>Parent <span className='text-brand'>{count}</span></div>
               <Button onClick={addCount}>add count +</Button>
           </div>
           <ChildA count={count}/>
       </div>
  );
}

export default Parent;

function ChildA(props) {
    const {count} = props;

    return (
        <div className="mb-16 w-200 h-200 bg-black-15 p-16">
            <span className='mb-16'>ChildA</span>
            <ChildB count={count}/>
        </div>
    );
}

function ChildB(props) {
    const {count} = props;

    return (
        <div className="mb-16 w-120 bg-black-15 p-16">Child B <span className="text-brand">{count}</span></div>
    );
}

