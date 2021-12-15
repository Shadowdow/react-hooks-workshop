import {useCallback, useEffect, useState} from "react";
import {Input, Select} from "antd";

const { Option } = Select;
const { Search } = Input;

let a;

// TODO: 利用useCallback优化下列代码
const fruits = ['apple', 'orange'];

const Practice = () => {
    const [params, paramsSet] = useState({});

    const handleSearch = (value)=> {
        paramsSet({...params, search: value})
    }

    const test = useCallback((value)=> {
        return ()=> {
            console.log(value);
        }
    }, []);

    useEffect(()=> {
        if(a) {
            console.log('a === test()', a === test());
        }else {
            a = test();
        }
    }, [params])

    return (
        <div>
            <Select defaultValue="lucy" onChange={(value)=> {paramsSet({...params, name: value})}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="rose">rose</Option>
            </Select>
            <Search placeholder="input search text" onSearch={handleSearch} />
            {
                fruits.map((fruit)=> {
                    return <div key={fruit} onClick={()=> {console.log(fruit)}}>{fruit}</div>
                })
            }
            {
                fruits.map((fruit)=> {
                    return <div key={fruit} onClick={test(fruit)}>{fruit}</div>
                })
            }
        </div>
    );
};

export default Practice;