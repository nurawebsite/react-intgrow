import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => { },
    page = 0,
    rowsPerPage = 10,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  console.log("---customer => ", items);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  HSN
                </TableCell>
                <TableCell>
                  IMPORT DESTINATION
                </TableCell>
                <TableCell>
                  EXPORT DESTINATION
                </TableCell>
                <TableCell>
                  CREDIT POINTS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items && items.length && items.map((customer) => {
                const createdAt = format(customer.createdAt, 'dd/MM/yyyy');
                const query = customer && customer.query && JSON.parse(customer.query) || {};
                const response = customer && customer.response && JSON.parse(customer.response) || {};
                const impHSNMap = response && response.import && response.import.map(a => a.value) || "";
                const expHSNMap = response && response.export && response.export.map(a => a.value) || "";
                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                  >
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {query ? query.hs : ''}
                    </TableCell>
                    <TableCell>
                      {impHSNMap.toString()}
                    </TableCell>
                    <TableCell>
                      {expHSNMap.toString()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
