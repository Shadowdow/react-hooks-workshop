import {useCallback, useState} from "react";
import {Form, Input, Select, Radio} from 'antd';

const { Option } = Select;

const getList = (searchKey = '')=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            return resolve(['apple', 'orange'].filter((fruit)=> fruit.includes(searchKey)));
        }, 500)
    })
}

// TODO: 利用useEffect完成初次数据加载以及搜索的功能
function Practice1() {
    const [list, listSet] = useState(null);

    const handleInputChange = useCallback((e)=> {
    }, []);

    return (
        <div>
            <Input placeholder='请输入关键词进行搜索' onChange={handleInputChange}/>
            <ul>
                {list?.map((item)=> <div key={item}>{item}</div>)}
            </ul>
        </div>
    );
}


// 模拟根据性别和名称获取书籍列表
const getBooks = ({name, gender})=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            if(name === "张三" && gender === '男') {
                return resolve(['JavaScript高级编程', 'JavaScript权威指南', 'HTTP权威指南', 'CSS禅意花园']);
            }

            return resolve([]);
        }, 1000)
    })
}

// TODO: 改造下列代码，利用useEffect获取书籍列表
const Practice2 = ()=> {
    const [formData, formDataSet] = useState({})

    const [books, booksSet] = useState([])

    const handleNameChange= useCallback((value)=> {
        formDataSet({...formData, name: value});
        getBooks({...formData, name: value}).then((res)=> {
            booksSet(res);
        });
    }, [formData])

    const handleGenderChange= useCallback((e)=> {
        formDataSet({...formData, gender: e.target.value});
        getBooks({...formData, gender: e.target.value}).then((res)=> {
            booksSet(res);
        });
    }, [formData])

    return (
        <Form>
            <div>
                <span className='block mb-16'>姓名: </span>
                <Select name="姓名" className='block mb-16' style={{width: '200px'}} onSelect={handleNameChange}>
                    <Option value="张三">张三</Option>
                    <Option value="李四">李四</Option>
                    <Option value="xxx">xxx</Option>
                </Select>
            </div>
            <div>
                <span className='block mb-16'>性别: </span>
                <Radio.Group name="性别" className='block mb-16' onChange={handleGenderChange}>
                    <Radio value="男">男</Radio>
                    <Radio value="女">女</Radio>
                </Radio.Group>
            </div>
            <div>
                <span className='block mb-16'>书籍: </span>
                <Select style={{width: '200px'}}>
                    {
                        books.map((book)=> <Option value={book}>{book}</Option>)
                    }
                </Select>
            </div>
        </Form>
    )
}

const Practice = ()=> {
    return (
        <div>
            <div className='text-18 font-500 mb-16 text-brand'>src/pages/effectLesson/demo3/index</div>
            <div className='mb-16 font-500 text-16'>下列练习均是项目中出现过的代码，均具有真实性哦～</div>
            <div className='text-brand mb-16'>练习1: 利用useEffect完成初次数据加载以及搜索的功能</div>
            <Practice1/>
            <div className='text-brand mb-16 mt-16'>练习2: 改造下列代码，利用useEffect获取书籍列表</div>
            <Practice2/>
        </div>
    )
}

export default Practice;