import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon';
import DocumentCheckIcon from '@heroicons/react/24/solid/DocumentCheckIcon';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import CalculatorIcon from '@heroicons/react/24/solid/CalculatorIcon';
import BanknotesIcon from '@heroicons/react/24/solid/BanknotesIcon';

import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <Squares2X2Icon />
      </SvgIcon>
    )
  },
  {
    title: 'HS Code Finder',
    path: '/hscodefinder',
    icon: (
      <SvgIcon fontSize="small">
        <MagnifyingGlassIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Duty Calculator',
    path: '/dutycalculator',
    icon: (
      <SvgIcon fontSize="small">
        <CalculatorIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Duty Saver Pro',
    path: '/dutysaver',
    icon: (
      <SvgIcon fontSize="small">
        <BanknotesIcon />
      </SvgIcon>
    )
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
    title: 'Home',
    path: '/home',
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
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
