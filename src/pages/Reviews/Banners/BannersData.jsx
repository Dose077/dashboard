import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ava from "../../../assets/ava.png";

function createData(img, calories, fat, carbs, protein) {
  return { img, calories, fat, carbs, protein };
}

const rows = [
  createData(159, "Баннер 1", 24, "Активный"),
  createData(237, "Баннер 1", 37, "Активный"),
  createData(262, "Баннер 1", 24, "Активный"),
  createData(305, "Баннер 1", 67, "Активный"),
  createData(356, "Баннер 1", 49, "Активный"),
];

export default function BannersData() {
  return (
<div className="p-5">
<TableContainer component={Paper}>
    <div className="p-5 ">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="font-bold">Изображение</p>
            </TableCell>
            <TableCell align="left">
              <p className="font-bold">Hазвание на узбекском</p>
            </TableCell>
            <TableCell align="left">
              <p className="font-bold">Hазвание на узбекском</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Статус</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={ava} alt="" />
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="center">
                <p className="text-white p-1 rounded-sm bg-blue-500">
                  {row.carbs}
                </p>
              </TableCell>
              <TableCell align="center">
                <svg
                  width="56"
                  height="128"
                  viewBox="0 0 56 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_di_433_2767)">
                    <rect
                      width="40"
                      height="96"
                      transform="translate(16 12)"
                      fill="white"
                    />
                    <path
                      d="M32 60C32 60.5304 31.7893 61.0391 31.4142 61.4142C31.0391 61.7893 30.5304 62 30 62C29.4696 62 28.9609 61.7893 28.5858 61.4142C28.2107 61.0391 28 60.5304 28 60C28 59.4696 28.2107 58.9609 28.5858 58.5858C28.9609 58.2107 29.4696 58 30 58C30.5304 58 31.0391 58.2107 31.4142 58.5858C31.7893 58.9609 32 59.4696 32 60ZM38 60C38 60.5304 37.7893 61.0391 37.4142 61.4142C37.0391 61.7893 36.5304 62 36 62C35.4696 62 34.9609 61.7893 34.5858 61.4142C34.2107 61.0391 34 60.5304 34 60C34 59.4696 34.2107 58.9609 34.5858 58.5858C34.9609 58.2107 35.4696 58 36 58C36.5304 58 37.0391 58.2107 37.4142 58.5858C37.7893 58.9609 38 59.4696 38 60ZM42 62C42.5304 62 43.0391 61.7893 43.4142 61.4142C43.7893 61.0391 44 60.5304 44 60C44 59.4696 43.7893 58.9609 43.4142 58.5858C43.0391 58.2107 42.5304 58 42 58C41.4696 58 40.9609 58.2107 40.5858 58.5858C40.2107 58.9609 40 59.4696 40 60C40 60.5304 40.2107 61.0391 40.5858 61.4142C40.9609 61.7893 41.4696 62 42 62Z"
                      fill="#4094F7"
                    />
                  </g>
                </svg>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </TableContainer>
</div>
  );
}
