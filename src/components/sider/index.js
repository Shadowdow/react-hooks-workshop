import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
        name: '重渲染'
    },{
        url: '/state-demo2',
        name: 'state-对象'
    },{
        url: '/state-demo3',
        name: 'state-数组'
    },{
        url: '/state-demo4',
        name: '惰性初值'
    },{
        url: '/state-demo5',
        name: 'setState异步'
    }]

    const useRefMenus = [{
        url: 'useRef-demo1',
        name: 'useRef'
    }]

    const useMemoMenus = [{
        url: 'useMemo-demo1',
        name: 'useMemo'
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
    }]

    const useContextMenus = [{
        url: 'useContext-demo1',
        name: 'useContext'
    }]

    const useReducerMenus = [{
        url: 'useReducer-demo1',
        name: 'useReducer'
    }]

    return (
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256, height: '100vh' }} theme="dark">
            <SubMenu key="useState" icon={<MailOutlined />} title="useState">
                {
                    useStateMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useRef" icon={<AppstoreOutlined />} title="useRef">
                {
                    useRefMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useEffect" icon={<SettingOutlined />} title="useEffect">
                {
                    useEffectMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useMemo" icon={<SettingOutlined />} title="useMemo">
                {
                    useMemoMenus.map(({url, name})=>
                        (
                            <Menu.Item key={name}>
                                <Link to={url}>{name}</Link>
                            </Menu.Item>
                        ))
                }
            </SubMenu>
            <SubMenu key="useContext" icon={<SettingOutlined />} title="useContext">
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
            <SubMenu key="useReducer" icon={<SettingOutlined />} title="useReducer">
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
        </Menu>
    );
};

export default Sider;
