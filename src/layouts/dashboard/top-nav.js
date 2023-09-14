import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import { MagnifyingGlassIcon, CalculatorIcon } from "@heroicons/react/24/solid";


import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
  Typography
} from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from './account-popover';
import { Logo } from 'src/components/logo';
import { getUsername } from 'src/utils/constants';
import { useState, useEffect } from 'react';
import { useAuth } from 'src/hooks/use-auth';


const SIDE_NAV_WIDTH = 240;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const [values, setValues] = useState({
    hs_code: 0,
    duty_calc: 0
  });
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();
  const auth = useAuth();

  useEffect(() => {
    async function fetchData() {
      const walletData = await auth.getWalletPoints();
      if (walletData && !walletData.ok) {
        const responseData = await walletData.json();
        const err = new Error(responseData.error || 'An error occurred');
        err.status = walletData.status;
        throw err;
      }
      const responseData = await walletData.json();
      setValues(responseData.result);
    }
    fetchData();
  }, [])

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          background: 'linear-gradient(-45deg, #0e588d, #274685)',
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Logo />
          </Stack>

          {(window.localStorage.getItem('authenticated') == 'true') && (
            <Stack
              alignItems="center"
              direction="row"
              sx={{
                marginRight: '40px',
                cursor: 'pointer',
              }}
            >

              <Stack
                direction="row"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    height: 30,
                    width: 30,
                    background: 'none'
                  }}
                >
                  <SvgIcon fontSize='small'>
                    <MagnifyingGlassIcon />
                  </SvgIcon>
                </Avatar>

                <Typography
                  color="#fff"
                  variant="overline"
                  sx={{
                    margin: '0 8px'
                  }}
                >
                  HS Code Points: {values.hs_code}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    height: 30,
                    width: 30,
                    background: 'none'
                  }}
                >
                  <SvgIcon fontSize='small'>
                    <CalculatorIcon />
                  </SvgIcon>
                </Avatar>

                <Typography
                  color="#fff"
                  variant="overline"
                  sx={{
                    margin: '0 8px'
                  }}
                >
                  Duty Calculation Points: {values.duty_calc}
                </Typography>
              </Stack>

              <Stack
                onClick={accountPopover.handleOpen}
                ref={accountPopover.anchorRef}
                direction="row"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    height: 30,
                    width: 30,
                    background: 'none'
                  }}
                >
                  <SvgIcon fontSize='small'>
                    <UserIcon />
                  </SvgIcon>
                </Avatar>

                <Typography
                  color="#fff"
                  variant="overline"
                  sx={{
                    margin: '0 8px'
                  }}
                >
                  {getUsername()}
                </Typography>
              </Stack>

            </Stack>
          )}
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
