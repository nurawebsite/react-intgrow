import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon';
import DocumentCheckIcon from '@heroicons/react/24/solid/DocumentCheckIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/',
    // icon: (
    //   <SvgIcon fontSize="small">
    //     <ChartBarIcon />
    //   </SvgIcon>
    // )
  },
  {
    title: 'HS Code Finder',
    path: 'taxes.intgrow.co/hscodefinder.html',
    // icon: (
    //   <SvgIcon fontSize="small">
    //     <UsersIcon />
    //   </SvgIcon>
    // )
  },
  {
    title: 'Duty Calculator',
    path: 'taxes.intgrow.co/duty.html',
    // icon: (
    //   <SvgIcon fontSize="small">
    //     <ShoppingBagIcon />
    //   </SvgIcon>
    // )
  },
  {
    title: 'Duty Saver Pro',
    path: 'taxes.intgrow.co/fta.html',
    // icon: (
    //   <SvgIcon fontSize="small">
    //     <UserIcon />
    //   </SvgIcon>
    // )
  },
  {
    title: 'Profile Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Subscription Plans',
    path: '/subscriptions',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Privacy Policy',
    path: '/privacy',
    icon: (
      <SvgIcon fontSize="small">
        <ShieldCheckIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Terms & Conditions',
    path: '/terms-conditions',
    icon: (
      <SvgIcon fontSize="small">
        <DocumentCheckIcon />
      </SvgIcon>
    )
  }
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
