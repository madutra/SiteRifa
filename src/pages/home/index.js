import React, { useContext } from "react";
import "./index.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GridRifa from '../../components/GridRifa';

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
            <h3> Selecione os números que deseja da rifa: </h3>
          </div>
        </Container>

        <Container className="grid">
          <GridRifa />
        </Container>

        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
      </Container>
    </React.Fragment>
  );
};

export default PagesHome;
