import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";

import routes from "./routes";
import useRoute from "@/hooks/useRoute";
import useLocalStorage from "@/hooks/useLocalStorage";

import { IPropsSidebar } from "@/components/Layout/Sidebar/Types";

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const [openedRoute, route] = useRoute(routes, "/");
  const [collapsed, setCollapsed] = useLocalStorage("collapse-sidebar", false);
  const [openedKeys, setOpenedKeys] = useState<string[]>([
    (!collapsed && openedRoute) || "",
  ]);

  const filterRoutes = (): Array<any> => {
    const array: Array<any> = [];
    routes.forEach((route) => {
      array.push({
        ...route,
        label: route.title,
      });
    });
    return array;
  };

  return (
    <Layout
      onToggle={() => setCollapsed((c) => !c)}
      sidebar={
        {
          activeKey: route,
          defaultSelectedKeys: [route],
          onOpenChange: (keys) => setOpenedKeys(keys),
          openKeys: openedKeys,
          onSelect: ({ key }) => navigate(key),
          collapsed: collapsed,
          items: filterRoutes(),
          width: 256,
          collapsedWidth: 48,
        } as IPropsSidebar
      }
    >
      {children}
    </Layout>
  );
};

export default Main;
