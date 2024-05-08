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
];

export default routes;
