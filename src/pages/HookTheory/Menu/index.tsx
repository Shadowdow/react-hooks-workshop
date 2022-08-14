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
  "Summary",
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
      name: "函数组件初始化阶段",
    },
    {
      url: "/HookTheory/why-hooks/lesson4",
      name: "函数组件更新阶段",
    },
  ];

  const useStateMenus = [
    {
      url: "/HookTheory/useState/lesson1",
      name: "what is useState?",
    },
    {
      url: "/HookTheory/useState/lesson2",
      name: "mountState",
    },
    {
      url: "/HookTheory/useState/lesson3",
      name: "UpdateState",
    },
    {
      url: "/HookTheory/useState/extraLesson",
      name: "Fiber",
    },
    {
      url: "/HookTheory/useState/practice",
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
    {
      url: "/HookTheory/useEffect/practice",
      name: "useEffectPractice",
    },
  ];

  const useMemoMenus = [
    {
      url: "/HookTheory/useMemo/lesson1",
      name: "useMemo初始化",
    },
    {
      url: "/HookTheory/useMemo/lesson2",
      name: "useMemo更新",
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
      name: "useRef初始化",
    },
    {
      url: "/HookTheory/useRef/lesson2",
      name: "useRef更新",
    },
  ];

  const summaryMenus = [
    {
      url: "/HookTheory/summary/lesson1",
      name: "总结",
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
        <SubMenu key="Summary" title="Summary">
          {summaryMenus.map(({ url, name }) => (
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
