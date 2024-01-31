import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "LOréal",
    "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
    "2008"
  ),
  createData(
    "The Walt Disney Company",
    "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub...",
    "2003"
  ),
  createData(
    "Eclair",
    "Physical space is often conceived in three linear dimensions, although modern physicists usually...",
    "2016"
  ),
  createData(
    "Gillette",
    "Maxwells equations—the foundation of classical electromagnetism—describe light as a wave that...",
    "2019"
  ),
  createData(
    "Mitsubishi",
    "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub...",
    "1998"
  ),
  createData(
    "Gillette",
    "Maxwells equations—the foundation of classical electromagnetism—describe light as a wave that...",
    "2019"
  ),
];

export default function BasicTable() {
  return (
  <div className="p-5">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="font-bold">Название</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Описание</p>
            </TableCell>
            <TableCell align="right">
              <p className="font-bold">Год основания</p>
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
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">
              <button>
              <svg
                  width="56"
                  height="72"
                  viewBox="0 0 56 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_di_289_2900)">
                    <rect
                      width="40"
                      height="40"
                      transform="translate(16 12)"
                      fill="white"
                    />
                    <path
                      d="M32 32C32 32.5304 31.7893 33.0391 31.4142 33.4142C31.0391 33.7893 30.5304 34 30 34C29.4696 34 28.9609 33.7893 28.5858 33.4142C28.2107 33.0391 28 32.5304 28 32C28 31.4696 28.2107 30.9609 28.5858 30.5858C28.9609 30.2107 29.4696 30 30 30C30.5304 30 31.0391 30.2107 31.4142 30.5858C31.7893 30.9609 32 31.4696 32 32ZM38 32C38 32.5304 37.7893 33.0391 37.4142 33.4142C37.0391 33.7893 36.5304 34 36 34C35.4696 34 34.9609 33.7893 34.5858 33.4142C34.2107 33.0391 34 32.5304 34 32C34 31.4696 34.2107 30.9609 34.5858 30.5858C34.9609 30.2107 35.4696 30 36 30C36.5304 30 37.0391 30.2107 37.4142 30.5858C37.7893 30.9609 38 31.4696 38 32ZM42 34C42.5304 34 43.0391 33.7893 43.4142 33.4142C43.7893 33.0391 44 32.5304 44 32C44 31.4696 43.7893 30.9609 43.4142 30.5858C43.0391 30.2107 42.5304 30 42 30C41.4696 30 40.9609 30.2107 40.5858 30.5858C40.2107 30.9609 40 31.4696 40 32C40 32.5304 40.2107 33.0391 40.5858 33.4142C40.9609 33.7893 41.4696 34 42 34Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_di_289_2900"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_289_2900"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_289_2900"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.898039 0 0 0 0 0.913725 0 0 0 0 0.921569 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_289_2900"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
