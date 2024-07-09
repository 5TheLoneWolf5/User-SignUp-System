import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function TableList(props) {
  return (
    <TableContainer>
      <Table size={props.size}>
        <TableHead>
          <TableRow>
            {/* There's only one row for the header. */}
            {props.header.map((cell, idx) => (
              <TableCell key={`header-${idx}`}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, idx) => (
            <TableRow key={`row-${idx}`}>
              {row.map((cell, idx) => (
                <TableCell key={`cell-${idx}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
