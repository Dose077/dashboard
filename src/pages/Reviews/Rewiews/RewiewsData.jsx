import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("😉 Курьер молодец ", "Активный"),
  createData("⚡️ Быстрая доставка		", "Активный"),
  createData("😋 Вкусная еда		", "Активный"),
  createData("🤝 Оператор был вежлив и дружелюбен", "Активный"),
  createData("🐌 Долгая доставка		", "Активный"),
  createData("🙁 Остывшая еда				", "Активный"),
  createData("🙁 Проблемы с курьером				", "Активный"),
  createData("🙁 Проблемы с оператором		", "Активный"),
];

export default function RewiewsData() {
  return (
<div className=" p-5">
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="font-bold">Название</p>
            </TableCell>
            <TableCell align="left">
              <p className="font-bold">Тип</p>
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
                {row.name}
              </TableCell>
              <TableCell align="left">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3463 10.4838C18.7213 9.9883 18.9289 9.38115 18.9289 8.74946C18.9289 7.74723 18.3687 6.79856 17.4669 6.26955C17.2347 6.13338 16.9704 6.06171 16.7012 6.06196H11.3486L11.4825 3.31865C11.5137 2.65571 11.2794 2.02624 10.824 1.54633C10.6005 1.30979 10.3309 1.12159 10.0319 0.993354C9.73278 0.865122 9.41058 0.799587 9.08517 0.800798C7.92446 0.800798 6.89767 1.58205 6.58963 2.70035L4.67222 9.64231H4.66553V19.1959H15.2079C15.4133 19.1959 15.6142 19.1557 15.7995 19.0753C16.862 18.6222 17.5472 17.5843 17.5472 16.4325C17.5472 16.1512 17.507 15.8745 17.4267 15.6066C17.8017 15.1111 18.0093 14.5039 18.0093 13.8722C18.0093 13.591 17.9691 13.3142 17.8887 13.0463C18.2637 12.5508 18.4713 11.9437 18.4713 11.312C18.4669 11.0307 18.4267 10.7517 18.3463 10.4838ZM1.07178 10.3566V18.4816C1.07178 18.8767 1.39097 19.1959 1.78606 19.1959H3.23696V9.64231H1.78606C1.39097 9.64231 1.07178 9.96151 1.07178 10.3566Z"
                    fill="#38D9B9"
                  />
                </svg>
              </TableCell>
              <TableCell align="center">
                <p className="text-blue-500 bg-blue-300 p-1 rounded">
                  {row.calories}
                </p>
              </TableCell>
              <TableCell align="right">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                    fill="#4094F7"
                  />
                </svg>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  );
}
