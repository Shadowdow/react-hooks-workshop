import React from 'react';
import "./index.css";
import { SmileOutlined, BulbOutlined } from '@ant-design/icons';

function MemoDemo1() {
    return (
    <div>
        <div className='text-18 font-500 mb-16'>useMemo</div>
        <div className='image-01'/>
        <div className='text-16 mb-16'>把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。</div>
        <div className='text-16 mb-16 text-brand'>记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。</div>
        <div className='text-16 mb-16 flex items-center'><SmileOutlined className="mr-8 text-brand"/>我们在项目中常用的</div>
        <div className='image-02 mb-16'/>
        <div className='image-03 mb-16'/>
        <div className='text-16 mb-16'>useMemo和useState不一样，我们可以很清晰的知道那些地方我们需要用到state，而useMemo并不是必须的。我们使用useMemo有助于避免在每次渲染时都进行高开销的计算。然而哪些是高开销的计算呢？</div>
        <div className='text-16 mb-16'>如果未使用useMemo包裹，每一次组件调用都需要进行一次计算并将计算值赋值给新的变量，由于一个函数执行完毕之后，就会从函数调用栈中被弹出，里面的内存也会被回收，所以并不会在内存上造成消耗。只是每次组件调用时会进行一次计算而已</div>
        <div className='text-16 mb-16'>如果使用useMemo包裹，每一次组件调用react都需要去对比依赖项是否有变化，有变化会重新计算，以及需要缓存上一次的值</div>
        <div className='text-16 mb-16'>这两种方式其实都会有消耗，甚至很多时候未使用useMemo包裹消耗还要更小一点</div>
        <div className='text-16 mb-16 text-brand'><BulbOutlined className='relative bottom-4'/> 但是对于我们来说，随着代码的不断膨胀，判断高开销的计算会变得很困难。如何去判断是否是高开销的计算？当下如果能判断，随着代码的不断膨胀，是否也会越发难以管理。所以，我们可以简单粗暴的定一个规则：当计算不是一行能解决的时候，我们就使用useMemo。这样并不会使我们的项目性能更好，但也不会使我们的项目更差，因为所造成的消耗几乎可以忽略不计</div>
    </div>
  );
}

export default MemoDemo1;