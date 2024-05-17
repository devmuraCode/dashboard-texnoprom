import React from "react";
import cx from "classnames";

import Dropdown from "@/components/Dropdown";

import cls from "../Table.module.scss";

interface Item {
  title: string;
  variant?: "primary" | "blue" | "danger";
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface IProps {
  items?: Item[];
}

const More: React.FC<IProps> = ({ items = [] }) => {
  return (
    <Dropdown
      menu={{
        items: items.map(item => ({
          key: item.title,
          label: (
            <div
              className={cx(cls.menuItem, item.variant && cls[`menuItem--variant-${item.variant}`])}
              onClick={item.onClick}
            >
              <div className={cls.menuItemTitle}>{item.title}</div>
            </div>
          ),
        })),
      }}
      overlayClassName={cls.overlay}
      placement="bottomRight"
      trigger={["click"]}
    >
      {items.length ? <div className={cx(cls.content, cls["content--more"])}>more</div> : ""}
    </Dropdown>
  );
};

export default More;
