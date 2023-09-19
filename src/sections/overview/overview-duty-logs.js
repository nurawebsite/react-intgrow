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
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { getFormattedDate, statusMap, statusText, getCountryName } from 'src/utils/constants';

export const OverviewDutyLogs = (props) => {
  const { orders = [], heading, subheading, sx, countryMap = [] } = props;

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
                    HSN
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Value Of Product
                  </TableCell>
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Mode Of Transport
                  </TableCell>
                  {/* <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Landed Cost
                  </TableCell> */}
                  <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => {
                  // const responseData = order && order.response && JSON.parse(order.response);
                  const point = order && order.point || 0;
                  const queryData = order && order.body && JSON.parse(order.body);
                  // const impHSNMap = responseData && responseData.import && responseData.import.map(a => a.value) || "";
                  // const expHSNMap = responseData && responseData.export && responseData.export.map(a => a.value) || "";
                  return (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getFormattedDate(order.iso_date)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getCountryName(queryData.import_country,countryMap)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {getCountryName(queryData.export_country,countryMap)}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {queryData.hscode}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {queryData.CIFVALUE || queryData.CIF || `unknown`}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        {queryData.mode}
                      </TableCell>
                      <TableCell sx={{ padding: '16px 12px', overflow: 'hidden' }}>
                        <SeverityPill color={statusMap[point]}>
                          {statusText[point]}
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

OverviewDutyLogs.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
