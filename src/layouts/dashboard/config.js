import CogIcon from '@heroicons/react/24/solid/CogIcon';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import BanknotesIcon from '@heroicons/react/24/solid/BanknotesIcon';
import { MagnifyingGlassIcon, CalculatorIcon, CurrencyDollarIcon, GiftIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

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

export const dashboardItem = [
  {
    title: 'HS Code Finder',
    value: '6',
    icon: (
      <SvgIcon fontSize="small">
        <MagnifyingGlassIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Import Duty Calculator',
    value: '4',
    icon: (
      <SvgIcon fontSize="small">
        <CalculatorIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Duty Saver Pro',
    value: '50',
    icon: (
      <SvgIcon fontSize="small">
        <CurrencyDollarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Products',
    value: '25',
    icon: (
      <SvgIcon fontSize="small">
        <GiftIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Countries',
    value: '20',
    icon: (
      <SvgIcon fontSize="small">
        <GlobeAltIcon />
      </SvgIcon>
    )
  },

  {
    title: 'Duty Saved',
    value: '$3500',
    icon: (
      <SvgIcon fontSize="small">
        <CurrencyDollarIcon />
      </SvgIcon>
    )
  }
];

export const hsnHistory = [
  {
    id: '11',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    des: 'Rice',
    impHSN: '10063020',
    expHSN: '10063011',
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: '12',
    date: '08-Aug-2023',
    imp: 'Malaysia',
    exp: 'Sri Lanka',
    des: 'Fowls of the species Gallus domesticus',
    impHSN: '0105119000A',
    expHSN: '01051110',
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'success'
  },
  {
    id: '13',
    date: '05-Aug-2023',
    imp: 'Austria',
    exp: 'Japan',
    des: 'Rice',
    impHSN: '10063020',
    expHSN: '10063011',
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'failed'
  },
  {
    id: '14',
    date: '04-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    des: 'Rice',
    impHSN: '10063020',
    expHSN: '10063011',
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: '15',
    date: '24-July-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    des: 'Rice',
    impHSN: '10063020',
    expHSN: '10063011',
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'success'
  }
];

export const dutyHistory = [
  {
    id: '1',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    hsn: '10063020',
    cif: '500000',
    duty: '4895',
    amount: 504895,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: '2',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    hsn: '10063020',
    cif: '500000',
    duty: '4895',
    amount: 504895,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: '3',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    hsn: '10063020',
    cif: '500000',
    duty: '4895',
    amount: 504895,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: '4',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    hsn: '10063020',
    cif: '500000',
    duty: '4895',
    amount: 504895,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: '5',
    date: '08-Aug-2023',
    imp: 'India',
    exp: 'Sri Lanka',
    hsn: '10063020',
    cif: '500000',
    duty: '4895',
    amount: 504895,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  }
]