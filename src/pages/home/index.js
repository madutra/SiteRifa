import React, { useContext } from "react";
import "./index.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//grid
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//checkbox
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingRight: "10px"
  },
  table: {
    minWidth: 700,
  },
}));

//table
const StyledTableCell = withStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      marginBottom: "20px"
    },
  },
}))(TableRow);

//Grid
function GridRifa() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={1}>
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={1}>
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={1}>
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
            className={classes.paper}
          />
        </Grid>
      </Grid>
    </div>
  );
} 

//Table
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  
];

function TabelaRifa() {
  
  const classes = useStyles();
  
  return(
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Dessert (100g serving)</StyledTableCell>
          <StyledTableCell align="right">Calories</StyledTableCell>
          <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

const PagesHome = () => {

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
        <Container className="cabeçalho"> 
          <div className="titulo"><h1 >Rifa Caio</h1></div>
          <div className="foto">
            <h1>Foto caio</h1>
            <h1> Descrição Rifa</h1>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <h1>________________________________________________________</h1>
          </div>
          <div className="titulo">
            <h3> Selecione os numeros que deseja da rifa: </h3>
          </div>
        </Container>
        <Container className="grid">
          <GridRifa />
        </Container>
        <Container>
          <TabelaRifa/>
        </Container>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
      </Container>
    </React.Fragment>
  );
};

export default PagesHome;
