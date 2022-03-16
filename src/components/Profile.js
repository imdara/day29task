import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Listitem from "./Listitem";

export default function Profile({ users, setUsers }) {
  return (
    <div className="profiles">
      <h1>User Profiles</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="text-center">
              <TableCell>Sr. No.</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>EmpID</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) => (
              <Listitem
                user={user}
                users={users}
                setUsers={setUsers}
                count={i + 1}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
