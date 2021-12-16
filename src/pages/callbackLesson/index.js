import React, {memo, useCallback, useState} from 'react';
import {Button, Input, Select} from "antd";
import {BulbOutlined} from "@ant-design/icons";

import "./index.css";

function CallbackDemo1() {
    const [showConclusion, showConclusionSet] =  useState(false);
    const [showRule, showRuleSet] =  useState(false);

    const handleShowConclusion = useCallback(()=> {
        showConclusionSet(true);
    }, []);

    const handleShowRule = useCallback(()=> {
        showRuleSet(true);
    }, []);

    return (
    <div>
        <div className='text-18 font-500 mb-16'>useCallback</div>
        <div className='image-01'/>
        <div className='text-brand text-16 mb-8 mt-16'>🍇🍇  useMemo和useCallback的对比</div>
        <ul>
            <li className='text-16'>
                <div className='text-brand'>useMemo</div>
                <div>缓存：值</div>
                <div>优点：避免了重复的昂贵计算，避免子组件（shouldComponentUpdate）的非必要渲染</div>
            </li>
            <li className='text-16'>
                <div className='text-brand'>useCallback</div>
                <div>缓存：函数</div>
                <div>优点：避免子组件（shouldComponentUpdate）的非必要渲染</div>
            </li>
        </ul>
        <div className='image-02 mb-16 mt-16'/>
        <div className='image-03 mb-16'/>
        <CallbackDemo2/>
        <Button onClick={handleShowConclusion}>结论</Button>
        {
            showConclusion && (
                <div>
                    <div className='text-18 mt-16 mb-16 text-brand'>useCallback和React.memo结合可以避免组件的不必要的渲染</div>
                    <Button onClick={handleShowRule}>下一步</Button>
                </div>
            )
        }
        {
            showRule && (
                <div>
                    <div className='mt-16 mb-16'>但和useMemo一样，使用他并不是完全没有成本的。很多时候，甚至我们不使用useCallback的性能还要比使用了还要更好一些。但是使用与否，这个尺度如何拿捏又是一个问题。最佳实践都是建议开发自己去考虑成本和收益，然后有需要的使用useCallback或者useMemo。</div>
                    <div className='mb-16'>然而落地到个人，是有难度的，且对于项目难以管理的。所以，我们也和useMemo一样简单粗暴的定一个规则：</div>
                    <div className='text-16 text-brand mb-16 font-500'><BulbOutlined className='relative bottom-4 mr-8'/>不要写内联函数</div>
                    <div className='text-16 text-brand mb-16 font-500'><BulbOutlined className='relative bottom-4 mr-8'/>将纯函数放到组件外部定义</div>
                    <div className='text-16 text-brand mb-16 font-500'><BulbOutlined className='relative bottom-4 mr-8'/>组件内的函数使用useCallback</div>
                    <div className='text-16 text-brand mb-16 font-500'><BulbOutlined className='relative bottom-4 mr-8'/>需要传参的函数需要使用useCallback吗？？？: 不需要</div>
                    <div className='image-09 mb-16'/>
                    <div className='image-10 mb-16'/>
                    <Practice/>
                </div>
            )
        }
    </div>
  );
}

export default CallbackDemo1;


const CallbackDemo2 = ()=> {
    const [count, countSet] = useState(0);

    const handleAddCount = useCallback(()=> {
        countSet((pre)=> pre + 1);
    }, [])

    const handleClick = ()=> {
        console.log('匿名函数');
    }

    const generateCallback = useCallback(()=> {
        console.log('useCallback');
    }, [])

    return (
        <div>
            <span className='text-brand mr-8'>{count}</span>
            <Button onClick={handleAddCount}>add count +</Button>
            <div className='mt-16 mb-16'>
                内联匿名函数
                <ChildA parent='🌞内联匿名函数' onClick={()=> {console.log('内联匿名函数')}}/>
                <ChildB parent='🌞内联匿名函数' onClick={()=> {console.log('内联匿名函数')}}/>
            </div>
            <div className='mt-16 mb-16'>
                匿名函数
                <ChildA parent='🌛匿名函数' onClick={handleClick}/>
                <ChildB parent='🌛匿名函数' onClick={handleClick}/>
            </div>
            <div className='mt-16 mb-16'>
                使用useCallback
                <ChildA parent='🌹useCallback' onClick={generateCallback}/>
                <ChildB parent='🌹useCallback' onClick={generateCallback}/>
            </div>
        </div>
    );
}


const ChildA = ({parent})=> {
    console.log(parent, 'childA 调用');
    return (
        <div>childA</div>
    );
}

const ChildB = memo(({parent})=> {
    console.log(parent, 'memo childB 调用');
    return (
        <div>childB</div>
    );
})

const { Option } = Select;
const { Search } = Input;

let a;

const fruits = ['apple', 'orange'];

const Practice = () => {
    const [params, paramsSet] = useState({});

    const handleSearch = (value)=> {
        paramsSet({...params, search: value})
    }

    const handleClick = useCallback((value)=>
        () => {
            console.log(value);
        }, []);

    console.log('a === test()', a === handleClick());
    a = handleClick();

    return (
        <div>
            <Select className='mb-16' defaultValue="lucy" onChange={(value)=> {paramsSet({...params, name: value})}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="rose">rose</Option>
            </Select>
            <Search className='mb-16' placeholder="input search text" onSearch={handleSearch} />
            {
                fruits.map((fruit)=> {
                    return (
                        <div
                            className='cursor-pointer'
                            key={fruit}
                            onClick={handleClick(fruit)}
                        >{fruit}</div>
                    )
                })
            }
        </div>
    );
};



