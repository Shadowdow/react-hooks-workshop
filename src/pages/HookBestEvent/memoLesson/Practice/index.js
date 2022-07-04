import {useCallback, useEffect, useMemo, useState} from "react";
import {Button} from "antd";

// 下列练习均是项目中出现过的代码，均具有真实性哦～

const computeExpensiveValue = (count)=> {
    // 假设这里是高开销的计算
    return `按钮被点击了${count}次`;
}

// TODO: 利用useMemo优化countString
const Practice01 = () => {
    const [count, countSet] = useState(0);
    const [countString, countStringSet] = useState('');

    useEffect(()=> {
        countStringSet(computeExpensiveValue(count));
    }, [count])

    const handleClick = useCallback(()=> {
        countSet((pre)=> pre + 1)
    },[]);

    return (
        <div>
            <div className='my-16'>count: {count}</div>
            <Button className='mr-16' onClick={handleClick}>add count +</Button>

            {countString}
        </div>
    );
};

// TODO: 找出下列代码的问题并修改
const Practice02 = () => {
    const [count, countSet] = useState(0);
    const [countString, countStringSet] = useState('');

    useMemo(()=> {
        countStringSet(computeExpensiveValue(count));
    }, [count]);

    const handleClick = useCallback(()=> {
        countSet((pre)=> pre + 1)
    },[]);

    return (
        <div>
            <div className='my-16'>count: {count}</div>
            <Button className='mr-16' onClick={handleClick}>add count +</Button>

            {countString}
        </div>
    );
};

// TODO: 优化下列代码(我们只需要记录最原始数据，通过将原始数据进行转换、组合、过滤等得到我们想要的数据)
const Practice03 = () => {
    const [count, countSet] = useState(0);
    const [countString, countStringSet] = useState('按钮被点击了0次');

    const handleClick = useCallback(()=> {
        countSet(count + 1 );
        countStringSet(computeExpensiveValue(count + 1));
    },[count]);

    return (
        <div>
            <div className='my-16'>count: {count}</div>
            <Button className='mr-16' onClick={handleClick}>add count +</Button>

            {countString}
        </div>
    );
};


// TODO: 优化下列代码
const Practice04 = () => {
    const [count, countSet] = useState(0);

    const handleClick = useCallback(()=> {
        countSet((pre)=> pre + 1);
    },[]);

    const generateString = useCallback(()=> {
        return computeExpensiveValue(count)
    }, [count]);

    return (
        <div>
            <div className='my-16'>count: {count}</div>
            <Button className='mr-16' onClick={handleClick}>add count +</Button>

            {generateString()}
        </div>
    );
};

const Practice = ()=>
    (
        <div>
            <div className='mb-16 font-500 text-16 text-brand'>src/pages/memoLesson/Practice/index</div>
            <div className='mb-16 font-500 text-16'>下列练习均是项目中出现过的代码，均具有真实性哦～</div>
            <div className='text-brand'>练习1</div>
            <Practice01/>
            <div className='mt-16 text-brand'>练习2</div>
            <Practice02/>
            <div className='mt-16 text-brand'>练习3</div>
            <Practice03/>
            <div className='mt-16 text-brand'>练习4</div>
            <Practice04/>
        </div>
    )

export default Practice

