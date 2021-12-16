import React, {useCallback, useState} from 'react';
import {Button} from "antd";

function Conclusion({children}) {
    const [showConclusion, showConclusionSet] =  useState(false);

    const handleShowConclusion = useCallback(()=> {
        showConclusionSet(true);
    }, []);

    return (
        <div>
            <Button className='mb-16' onClick={handleShowConclusion}>结论</Button>
            {showConclusion && children}
        </div>
  );
}

export default Conclusion;