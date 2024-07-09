import TableList from "../components/TableList";
import OwnTypography from "../components/Typography";
import { fakeHeader, fakeRows } from "../utils/fakeList";

export default function List(props) {
  return (
    <>
      <OwnTypography variant="h4" gutterBottom>
        Lista de usuários
      </OwnTypography>
      <TableList header={fakeHeader()} rows={fakeRows()} size="small" />
    </>
  );
}
