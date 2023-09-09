import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  success: 'success',
  failed: 'error'
};

export const OverviewLatestDutyOrders = (props) => {
  const { orders = [], heading, subheading, sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader
        title={heading}
        subheader={subheading}
      />
      <Divider
        sx={{
          borderColor: 'rgb(122 161 189)'
        }}
      />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{padding: '16px 12px'}}>
                  Date
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Import Destination
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Export Destination
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  HSN
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Value of Product(CIF)
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Import Duty Amount
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Landed Cost
                </TableCell>
                <TableCell sx={{padding: '16px 12px'}}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
              
                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.date}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.imp}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.exp}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.hsn}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.cif}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.duty}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      {order.amount}
                    </TableCell>
                    <TableCell sx={{padding: '16px 12px'}}>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestDutyOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
