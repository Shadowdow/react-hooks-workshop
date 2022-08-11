import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const rootSubmenuKeys = [
  "Why Hooks?",
  "UseState",
  "UseMemo",
  "UseCallback",
  "UseEffect",
  "UseRef",
  // "UseReducer",
  // "Hooks Practice",
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
      name: "什么是 Hooks ",
    },
    {
      url: "/HookTheory/why-hooks/lesson2",
      name: "Hooks 是从哪来的？",
    },
    {
      url: "/HookTheory/why-hooks/lesson3",
      name: "Hooks 怎么保存的？",
    },
  ];

  const useStateMenus = [
    {
      url: "/HookTheory/useState/lesson1",
      name: "what is useState?",
    },
    {
      url: "/HookTheory/useState/extraLesson",
      name: "Fiber",
    },
    {
      url: "/HookTheory/useState/lesson4",
      name: "useStatePractice",
    },
  ];

  const useEffectMenus = [
    {
      url: "/HookTheory/useEffect/lesson1",
      name: "初始化",
    },
    {
      url: "/HookTheory/useEffect/lesson2",
      name: "更新",
    },
    // {
    //   url: "/HookTheory/useEffect/lesson3",
    //   name: "清理副作用",
    // },
    {
      url: "/HookTheory/useEffect/practice",
      name: "useEffectPractice",
    },
  ];

  const useMemoMenus = [
    {
      url: "/HookTheory/useMemo/lesson1",
      name: "初始化",
    },
    {
      url: "/HookTheory/useMemo/lesson2",
      name: "更新",
    },
    {
      url: "/HookTheory/useMemo/practice",
      name: "useMemoPractice",
    },
  ];

  const useCallbackMenus = [
    {
      url: "/HookTheory/useCallback/lesson1",
      name: "useCallback",
    },
    {
      url: "/HookTheory/useCallback/practice",
      name: "useCallbackPractice",
    },
  ];

  const useRefMenus = [
    {
      url: "/HookTheory/useRef/lesson1",
      name: "useRef",
    },
  ];

  // const useReducerMenus = [
  //   {
  //     url: "/HookTheory/useReducer/lesson1",
  //     name: "useReducer",
  //   },
  //   {
  //     url: "/HookTheory/useReducer/practice",
  //     name: "useReducerPractice",
  //   },
  // ];

  // const practiceMenus = [
  //   {
  //     url: "/HookTheory/practice/useState",
  //     name: "useState",
  //   },
  //   {
  //     url: "/HookTheory/practice/useEffect",
  //     name: "useEffect",
  //   },
  //   {
  //     url: "/HookTheory/practice/useCallback",
  //     name: "useCallback",
  //   },
  //   {
  //     url: "/HookTheory/practice/useMemo",
  //     name: "useMemo",
  //   },
  //   {
  //     url: "/HookTheory/practice/useReducer",
  //     name: "useReducer",
  //   },
  // ];

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
        <SubMenu key="UseMemo" title="UseMemo">
          {useMemoMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseCallback" title="UseCallback">
          {useCallbackMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="UseRef" title="UseRef">
          {useRefMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        {/*<SubMenu key="UseReducer" title="UseReducer">*/}
        {/*  {useReducerMenus.map(({ url, name }) => (*/}
        {/*    <Menu.Item key={name}>*/}
        {/*      <Link to={url}>{name}</Link>*/}
        {/*    </Menu.Item>*/}
        {/*  ))}*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="Hooks Practice" title="Hooks Practice">*/}
        {/*  {practiceMenus.map(({ url, name }) => (*/}
        {/*    <Menu.Item key={name}>*/}
        {/*      <Link to={url}>{name}</Link>*/}
        {/*    </Menu.Item>*/}
        {/*  ))}*/}
        {/*</SubMenu>*/}
      </Menu>
    </>
  );
};

export default HooksMenu;
