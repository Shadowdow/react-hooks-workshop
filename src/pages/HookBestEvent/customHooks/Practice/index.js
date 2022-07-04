import React, {useCallback, useEffect, useMemo, useState} from "react";

// TODO: const { data, error, loading } = useRequest(fn, {manual, refreshDeps})
function useRequest(requestFn, option) {
    return {}
}

const getData = ()=> {
    return new Promise((resolve)=> {
       setTimeout(()=> {
           resolve(['apple', 'orange'])
       }, 3000)
    })
}

const Practice = ()=> {
  const {loading, data} = useRequest(()=> getData());

  const content = useMemo(()=> {
      if(loading) {
          return 'loading';
      }

      if(!data?.length) {
          return 'empty';
      }

      return data.map((item)=> {return <div key={item}>{item}</div>})
  }, [loading, data])


  return (
      <div>
          <div className='mb-16 font-500 text-18 text-brand'>练习：到src/pages/customHooks/Practice/index去完成我们的练习把～！</div>
          <div className='mb-16 font-500 text-18 text-brand'>完成自定义useRequest的hooks，要求尽量实现loading、data、error，以及手动加载/自动加载（manual）和refreshDeps</div>
          {content}
      </div>
  )
}

export default Practice;