import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link
} from '@mui/material';
import NextLink from "next/link";
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { getFormattedDate, statusMap, statusText, getCountryName } from 'src/utils/constants';

export const OverviewHsnLogs = (props) => {
  const { orders = [], heading, subheading, sx, redirectTo, countryMap } = props;

  if (orders && orders.length) {
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
            <Table
              sx={{
                tableLayout: 'fixed'
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Import Destination
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Export Destination
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Product
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Import Destination HSN
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Export Destination HSN
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => {
                  const responseData = order && order.response && JSON.parse(order.response);
                  const point = order && order.point || 0;
                  const status = point > 0 ? 1 : 0;
                  const queryData = order && order.query && JSON.parse(order.query);
                  const impHSNMap = responseData && responseData.import && responseData.import.map(a => a.value) || "";
                  const expHSNMap = responseData && responseData.export && responseData.export.map(a => a.value) || "";
                  return (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getFormattedDate(order.iso_date)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getCountryName(queryData.imp, countryMap)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getCountryName(queryData.exp, countryMap)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {queryData.hs}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {impHSNMap.toString()}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {expHSNMap.toString()}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        <SeverityPill color={statusMap[status]}>
                          {statusText[status]}
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
          <Link
            component={NextLink}
            href={redirectTo}>
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
          </Link>
        </CardActions>
      </Card>
    );
  }

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
      <Box sx={{ minWidth: 800 }}>
        <CardContent>
          No data to display
        </CardContent>
      </Box>
    </Card>
  )
};

OverviewHsnLogs.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
