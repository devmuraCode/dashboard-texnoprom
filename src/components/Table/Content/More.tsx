import React from "react";
import { Menu } from "antd";

import Dropdown from "@/components/Dropdown";

import cls from "../Table.module.scss";

interface Item {
  title: string;
  icon?: React.ReactNode;
  variant?: "primary" | "blue" | "danger";
  onClick?: () => void;
}

interface IProps {
  items?: Item[];
}

const More: React.FC<IProps> = ({ items = [] }) => {
  console.log(items);
  
  const menuItems = items.map((item, index) => (
    <Menu.Item key={index} onClick={item.onClick}>
      {item.icon && <span className={cls.icon}>{item.icon}</span>}
      {item.title} {/* Render item.title here */}
    </Menu.Item>
  ));

  return (
    <Dropdown
      menu={{
        selectable: false,
        onClick: () => {},
      }}
      overlayClassName={cls.overlay}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Menu>{menuItems}</Menu>
    </Dropdown>
  );
};

export default More;
