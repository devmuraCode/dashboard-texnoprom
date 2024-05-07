import { MenuProps } from "antd/es/menu";

export interface IMenu {
  key: string;
  title: string;
  suffix?: React.ReactNode;
  children?: Array<IMenu>;
}

export interface IPropsMenu extends Omit<MenuProps, "items" | "className"> {
  items: Array<IMenu>;
}
