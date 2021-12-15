import React, {useCallback, useMemo, useState} from 'react';

import "./index.css";
import {Button, Modal} from "antd";

function CustomHooks() {
    return (
    <div>
        <div className='text-18 font-500 mb-16'>自定义 Hook</div>
        <div>自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。提取一些共有逻辑</div>
        <ChildA/>
        <ChildB/>
    </div>
  );
}

export default CustomHooks;

const ChildA = ()=> {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    return (
        <div>
            childA
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Button onClick={showModal}>Open Modal</Button>
        </div>
    )
}

const ChildB = ()=> {
    const [visible, {setTrue, setFalse}] = useBoolean(false);

    const showModal = () => {
        setTrue();
    };

    const handleOk = useCallback(() => {
        setFalse(false);
    }, []);

    const handleCancel = useCallback(() => {
        setFalse(false);
    }, []);

    return (
        <div>
            childB
            <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Button onClick={showModal}>Open Modal</Button>
        </div>
    )
}

function useBoolean(defaultValue) {
    const [state, setState] = useState(defaultValue);

    const actions = useMemo(() => {
        const toggle = () => setState((pre) => !pre);
        const set = (value) => setState(value);
        const setTrue = () => setState(true);
        const setFalse = () => setState(false);

        return {
            toggle,
            set,
            setTrue,
            setFalse,
        };
    }, []);

    return [state, actions];
}




