import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";

import Layout from "antd/lib/layout";

import Dropdown from "@/components/Dropdown";

import cls from "./Header.module.scss";

interface Item {
  name: string;
  onClick?: () => void;
}

interface IProps {
  header?: string;
  onToggle: () => void;
  onClick?: () => void;
}

const Header: React.FC<IProps> = ({ onToggle, onClick }) => {
  const navigate = useNavigate();

  const items: Item[] = useMemo(
    () => [
      {
        name: "logout",
        onClick: onClick,
      },
    ],
    [navigate, onClick]
  );

  return (
    <Layout.Header className={cls.wrapper}>
      <MenuFoldOutlined
        className={cls.toggle}
        onClick={onToggle}
        name="Menu"
        size={28}
      />
      <div className={cls.settings}>
        <Dropdown
          menu={{
            items: [
              ...items.map((item) => ({
                key: item.name,
                label: (
                  <div className={cls.item} onClick={item.onClick}>
                    <div>{item.name}</div>
                  </div>
                ),
              })),
            ],
          }}
          overlayClassName={cls.overlay}
          trigger={["click"]}
        >
          <div className={cls.name}>Mura</div>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
