import {useCallback, useState} from "react";
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

function EffectDemo3() {
    const [list, listSet] = useState(null);

    const handleSearch = useCallback((value)=> {
        console.log(value);
    }, []);

    return (
        <div>
            <div className='text-18 font-500 mb-16 text-brand'>src/pages/effectLesson/demo3/index</div>
            <div className='text-18 font-500 mb-16'>练习：利用useEffect完成页面第一次初始化数据请求，且当点击搜索按钮时，也要获取搜索后数据，并展示在页面上</div>
            <Search className='mb-16' placeholder="input search text" onSearch={handleSearch} />
            <ul>
                {list?.map((item)=> <div key={item}>{item}</div>)}
            </ul>
        </div>
    );
}

export default EffectDemo3;
