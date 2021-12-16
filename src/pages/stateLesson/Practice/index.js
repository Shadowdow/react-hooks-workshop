import React, {useCallback, useEffect, useState} from "react";
import {Button, Input} from "antd";

const { Search } = Input;

function Practice01() {
    const [arr, arrSet] = useState(['apple', 'orange']);

    const setArrWithOldObj = useCallback(()=> {
        // TODO: 把banana加到水果列表去（直接改引用）
    }, [arr]);

    const setArrWithNewObj = useCallback(()=> {
        // TODO: 把banana加到水果列表去（生成新引用）
    }, [arr]);

    return (
        <div>
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


const getInitialState = ()=> {
    console.log('compute Expensive')
    // 假设这里的计算是非常昂贵复杂的😊
    return 0;
}


// TODO: 利用惰性初值优化下列代码
function Practice02() {
    const [count, countSet] = useState(getInitialState());

    const addCount = useCallback(()=> {
        countSet(count +1 )
    }, [count]);

    return (
        <div>
            {count}
            <Button className="mb-16 ml-8" onClick={addCount}>add count</Button>
        </div>
    );
}

// TODO: 使用React.memo优化不必要的函数调用
const Practice03 = () =>{
    const [count, countSet] = useState(0);

    const increment = useCallback(
        ()=> countSet((pre) => pre + 1),
        []
    )

    return (
        <div className='bg-black-15 p-20'>
            <div className='mb-16'>父组件 有一个state count <span className='text-brand'>{count}</span></div>
            <ChildD/>
            <Button onClick={increment}>add count</Button>
        </div>
    )
}

const ChildD = () => {
    console.log('ChildD call');
    return (
        <div className="mb-16 bg-black-25 p-20">D组件</div>
    );
};

// TODO: 找出下列bug并修复
function Practice04() {
    const [list, listSet] = useState(null);
    const [searchKey, searchKeySet] = useState('');

    useEffect(()=> {
        getList(searchKey).then((res)=> {
            listSet(res);
        });
    }, [])

    const handleSearch = useCallback((value)=> {
        searchKeySet(value);
        getList(searchKey).then((res)=> {
            listSet(res);
        });
    }, [searchKey]);

    return (
        <div>
            <Search className='mb-16' placeholder="input search text" onSearch={handleSearch} />
            <ul className='mb-16'>
                水果列表：
                {list?.map((item)=> <div key={item}>{item}</div>)}
            </ul>
        </div>
    );
}

const getList = (searchKey)=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const list = searchKey ? ['apple🍎', 'orange🍊'].filter((item)=> item.includes(searchKey)): ['apple🍎', 'orange🍊']
            return resolve(list);
        }, 500)
    })
}

const Practice = ()=> {
    return (
        <div>
            <div className='mb-16 font-500 text-18'>练习：到src/pages/stateLesson/Practice/index去完成我们的练习把～！</div>
            <div className='mb-16 text-16 text-brand'>练习1</div>
            <Practice01/>
            <div className='mb-16 text-16 mt-16 text-brand'>练习2</div>
            <Practice02/>
            <div className='mb-16 text-16 mt-16 text-brand'>练习3</div>
            <Practice03/>
            <div className='mb-16 text-16 mt-16 text-brand'>练习4</div>
            <Practice04/>
        </div>
    )
}

export default Practice;


