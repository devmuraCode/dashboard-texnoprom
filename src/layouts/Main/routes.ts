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
    key: '/collections',
    title: 'collections',
  },
  {
    key: '/collections/create',
    title: 'collections_create',
  },
  {
    key: '/categories',
    title: 'categories',
  },
  {
    key: '/categories/create',
    title: 'categories_create',
  },
  {
    key: '/brands',
    title: 'brands',
  },
  {
    key: '/brands/create',
    title: 'brands_create',
  },

];

export default routes;
