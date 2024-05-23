import { lazy } from 'react';


export default [
  {
    path: '/',
    Page: lazy(() => import('@/pages/Banners/List')),
  },
  {
    path: '/banners/create',
    Page: lazy(() => import('@/pages/Banners/Create')),
  },
  {
    path: '/banners/update/:id',
    Page: lazy(() => import('@/pages/Banners/Update')),
  },
];
