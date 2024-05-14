import { IMenu } from "../../components/Menu/Types";

const routes: IMenu[] = [
  {
    key: "/",
    title: "banners",
  },
  {
    key: "/banners/create",
    title: "banner_create",
  },
  {
    key: "/banners/update/:id",
    title: "banner_update",
  },
  {
    key: '/category',
    title: 'category',
  },
  {
    key: "/category/create",
    title: "category",
  },
  {
    key: "/category/update/:id",
    title: "category_update",
  },
];

export default routes;
