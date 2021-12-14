import React from 'react';

import './index.css';

function ReducerDemo1() {
   return (
    <div>
        <div className='text-18 font-500 mb-16'>useContext</div>
        <div className="data-flow mb-16"/>
        <div className='text-16 mb-16'>在context这个高级API出来之前，数据流向只能<span className='text-brand'>自上而下</span>，从父组件一层一层的往下传递。如上图左。</div>
        <div className='text-16 mb-16'>如果仅仅只支持这样的方式，在实践中会遇到很多麻烦。</div>
        <div className='text-16 mb-16'>例如一个数据要传到使用它的组件，中间还要经历3个组件。我们就不得不在这三个中间组件中处理该数据的传递逻辑。但其实对于这三个组件而言，该数据毫无用处。</div>
        <div className='text-16 mb-16'>context的出现，就是为了解决这样的痛点。context能够让数据直达需要它的那一个子组件。如上图右。</div>
        <div className='mb-16'>React提供了一个名为<span className='text-brand'>useContext</span>的hook，能够让我们在hooks组件中使用context的能力。</div>
    </div>
  );
}

export default ReducerDemo1;
