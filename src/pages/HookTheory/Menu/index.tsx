import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const rootSubmenuKeys = [
  "Why Hooks?",
  "UseState",
  "UseEffect",
  "UseContext",
  "UseReducer",
  "Hooks Practice",
];

const HooksMenu = () => {
  const [openKeys, setOpenKeys] = React.useState(["Why Hooks?"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const whyHooksMenus = [
    {
      url: "/HookTheory/why-hooks/lesson1",
      name: "React组件设计理论",
    },
    {
      url: "/HookTheory/why-hooks/lesson2",
      name: "Class Component 复用困局",
    },
    {
      url: "/HookTheory/why-hooks/lesson3",
      name: "Function Component 缺失的功能",
    },
    {
      url: "/HookTheory/why-hooks/lesson4",
      name: "Function Component + Hook 黄金搭档",
    },
  ];

  const useStateMenus = [
    {
      url: "/HookTheory/useState/lesson1",
      name: "what is useState?",
    },
    {
      url: "/HookTheory/useState/lesson2",
      name: "为什么只能在React函数中调用Hook",
    },
    {
      url: "/HookTheory/useState/lesson3",
      name: "为什么只在最顶层使用 Hook",
    },
    {
      url: "/HookTheory/useState/lesson4",
      name: "useStatePractice",
    },
  ];

  const useEffectMenus = [
    {
      url: "/HookTheory/useEffect/lesson1",
      name: "useEffect实现剖析",
    },
    {
      url: "/HookTheory/useEffect/lesson2",
      name: "deps参数很重要",
    },
    {
      url: "/HookTheory/useEffect/lesson3",
      name: "清理副作用",
    },
    {
      url: "/HookTheory/useEffect/practice",
      name: "useEffectPractice",
    },
  ];

  const useContextMenus = [
    {
      url: "/HookTheory/useContext/lesson1",
      name: "useContext",
    },
  ];

  const useReducerMenus = [
    {
      url: "/HookTheory/useReducer/lesson1",
      name: "useReducer",
    },
    {
      url: "/HookTheory/useReducer/practice",
      name: "useReducerPractice",
    },
  ];

  const practiceMenus = [
    {
      url: "/HookTheory/practice/useState",
      name: "useState",
    },
    {
      url: "/HookTheory/practice/useEffect",
      name: "useEffect",
    },
    {
      url: "/HookTheory/practice/useCallback",
      name: "useCallback",
    },
    {
      url: "/HookTheory/practice/useMemo",
      name: "useMemo",
    },
    {
      url: "/HookTheory/practice/useReducer",
      name: "useReducer",
    },
  ];

  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 310, height: "2000px" }}
        theme="dark"
      >
        <SubMenu key="Why Hooks?" title="Why Hooks?">
          {whyHooksMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseState" title="UseState">
          {useStateMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseEffect" title="UseEffect">
          {useEffectMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseContext" title="UseContext">
          {useContextMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseReducer" title="UseReducer">
          {useReducerMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="Hooks Practice" title="Hooks Practice">
          {practiceMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </>
  );
};

export default HooksMenu;
