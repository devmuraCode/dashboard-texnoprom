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
  {
    path: '/collections/',
    Page: lazy(() => import('@/pages/Collections/List')),
  },
  {
    path: '/collections/create',
    Page: lazy(() => import('@/pages/Collections/Create')),
  },
  {
    path: '/collections/update/:id',
    Page: lazy(() => import('@/pages/Collections/Update')),
  },
];
