import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function Listitem({ count, user, users, setUsers }) {
  const deleteItemHandler = () => {
    setUsers(users.filter((ele) => ele.empId !== user.empId)); // filtering out the element of the array so it wont be rendered
  };
  return (
    <TableRow key={count} className="text-center">
      <TableCell>{count}</TableCell>
      <TableCell>{user.firstName}</TableCell>
      <TableCell>{user.lastName}</TableCell>
      <TableCell>{user.empId}</TableCell>
      <TableCell>{user.city}</TableCell>
      <TableCell>
        <Link to={`/View/${user.empId}`}>
          <PreviewIcon style={{ marginRight: "7px" }} />
        </Link>
        <Link to={`/Edit/${user.empId}`}>
          <EditIcon />
        </Link>
        <IconButton
          style={{ marginBottom: "13px" }}
          onClick={deleteItemHandler}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
