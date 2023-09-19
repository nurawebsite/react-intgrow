import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { title, icon, sx, value } = props;
  const points = window.localStorage.getItem("points");
  const pointsUsed = points && JSON.parse(points) || {};

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Typography
              color="#012970"
              variant="overline"
              sx={{
                lineHeight: 'normal'
              }}
            >
              {title}
            </Typography>
            <Typography variant="subtitle2">
              {pointsUsed[value] || 0}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 40,
              width: 40
            }}
          >
            {icon}
          </Avatar>
        </Stack>
        
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
