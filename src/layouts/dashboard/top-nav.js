import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';

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


const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

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

          <Stack
            alignItems="center"
            direction="row"
            sx={{
              marginRight: '40px',
              cursor: 'pointer',
              width: '15%'
            }}
          >
            <Tooltip
            title="Notifications"
            sx={{
              marginRight: '32px'
            }}
            >
              <IconButton>
                <SvgIcon fontSize="small">
                  <BellIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
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
