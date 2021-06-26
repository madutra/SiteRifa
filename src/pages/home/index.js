import React from "react";
import "./index.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import GridRifa from '../../components/GridRifa';
import Header from "../../components/Header";
import Titulo from "../../components/Titulo";
import Foto from "../../components/Foto";
import Footer from "../../components/Footer";

const PagesHome = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth>
        <Header />

        <Container className="cabeçalho">
          <Titulo />

          <Foto />

          <div style={{display: "flex", justifyContent: "center"}}>
            <h1>________________________________________________________</h1>
          </div>
        </Container>

        <GridRifa />

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default PagesHome;
