import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

const rootSubmenuKeys = ['useState', 'useRef', 'useEffect'];

const Sider = () => {
    const [openKeys, setOpenKeys] = React.useState(['useState']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const useStateMenus = [{
        url: '/state-demo1',
        name: '数据流'
    },{
        url: '/state-demo2',
        name: 'state-引用'
    },{
        url: '/state-demo4',
        name: '惰性初值'
    },{
        url: '/state-demo5',
        name: 'setState异步'
    }, {
        url: '/state-Practice',
        name: 'setState练习'
    }]

    const useRefMenus = [{
        url: 'useRef-demo1',
        name: 'useRef'
    }]

    const useMemoMenus = [{
        url: 'useMemo-demo1',
        name: 'useMemo'
    },{
        url: 'useMemo-practice',
        name: 'useMemo练习'
    }]

    const useCallbackMenus = [{
        url: 'useCallback-demo1',
        name: 'useCallback'
    },{
        url: 'useCallback-practice',
        name: 'useCallback练习'
    }]

    const useEffectMenus = [{
        url: '/effect-demo1',
        name: '依赖数组'
    },{
        url: '/effect-demo2',
        name: '清除'
    },{
        url: '/effect-demo3',
        name: '练习1'
    },{
        url: '/effect-demo4',
        name: '练习2'
    },{
        url: '/effect-demo5',
        name: '练习3'
    }]

    const useContextMenus = [{
        url: 'useContext-demo1',
        name: 'useContext'
    }]

    const useReducerMenus = [{
        url: 'useReducer-demo1',
        name: 'useReducer'
    }]

    const customHooksMenus = [{
        url: 'customHooks-demo1',
        name: '自定义 Hook'
    },{
        url: '/customHooks-practice',
        name: '自定义 Hook练习'
    }]

    return (
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256, height: '100vh' }} theme="dark">
            <SubMenu key="useState" title="useState">
                {
                    useStateMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useRef" title="useRef">
                {
                    useRefMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useEffect" title="useEffect">
                {
                    useEffectMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useMemo" title="useMemo">
                {
                    useMemoMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useCallBack" title="useCallBack">
                {
                    useCallbackMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useContext" title="useContext">
                {
                    useContextMenus
                        .map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useReducer" title="useReducer">
                {
                    useReducerMenus
                        .map(({url, name})=>
                            (
                                <Menu.Item key={name}>
                                    <Link to={url}>{name}</Link>
                                </Menu.Item>
                            ))
                }
            </SubMenu>
            <SubMenu key="自定义Hook" title="自定义 Hook">
                {
                    customHooksMenus
                        .map(({url, name})=>
                            (
                                <Menu.Item key={name}>
                                    <Link to={url}>{name}</Link>
                                </Menu.Item>
                            ))
                }
            </SubMenu>
        </Menu>
    );
};

export default Sider;
