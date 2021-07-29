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

      <Container style={{paddingLeft: 0, paddingRight:0, backgroundColor: "rgb(221,221,221)"}}>
        <Header />

        <Container className="cabeçalho">
          <Titulo />
          <div className="divisao"/>
          <Foto />

          <div className="divisao"/>
        </Container>

        <GridRifa />

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default PagesHome;
