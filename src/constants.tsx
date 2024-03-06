import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Playlist',
    path: '/playlist',
    icon: <Icon icon="lucide:music" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Songs', path: '/playlist/songs' },
      { title: 'Recommended', path: '/playlist/recommended' },
      
    ],
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
