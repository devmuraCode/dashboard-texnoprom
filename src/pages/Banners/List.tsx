import { useList } from "@/modules/banner/hooks";
import React from "react";

const List: React.FC = () => {
  
  const { items } = useList();
  console.log(items);
  
  return (
    <div>
      <h1>Banners</h1>
      {items?.map((item) => (
        <div key={item.id}>{item.title_ru}</div>
      ))}
    </div>
  );
};

export default List;
