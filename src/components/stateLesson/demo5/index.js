import {useCallback, useEffect, useState} from "react";
import {Input} from 'antd';

const { Search } = Input;

const getList = (searchKey)=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const list = searchKey ? ['apple', 'orange'].filter((item)=> item.includes(searchKey)): ['apple', 'orange']
            return resolve(list);
        }, 500)
    })
}

function StateDemo5() {
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
            <div className='text-18 font-500 mb-16'>无论是在class中，还是hooks中，state的改变，都是异步的</div>
            <div className='mb-16'>状态异步，也就意味着，当你想要在setCounter之后立即去使用它时，你无法拿到状态最新的值，而之后到下一个事件循环周期执行时，状态才是最新的值</div>
            <div className='mb-16'>例如我们想要用一个接口，去请求一堆数据，而这个接口接收多个参数</div>
            <Search className='mb-16' placeholder="input search text" onSearch={handleSearch} />
            <ul>
                {list?.map((item)=> <div key={item}>{item}</div>)}
            </ul>
        </div>
    );
}

export default StateDemo5;
