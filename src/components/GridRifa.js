import React, {useState} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import NumeroRifa from "./NumeroRifa";
import Container from "@material-ui/core/Container";
import { config } from '../config';

const useStyles = makeStyles((theme) => (
    {
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
        }}
));

function GridRifa() {
    /**
     * PREENCHER ESTE ARRAY COM QUEM JÁ PAGOU (ESTÁ PREENCHIDO)
     *
     */
    const filled = [
        3,
        5
    ];

    const classes = useStyles();

    let gridRifa = [];

    for(let i = 1 ; i <= config.quantidade_max ; i++) {
        let preenchido = false;

        if (filled.includes(i)) {
            preenchido = true;
        }

        gridRifa.push({
          codigo: i,
          preenchido: preenchido
        })
    }
  
    function Rifas() {
      return(
        gridRifa.map((obj) => {
          return (
            <NumeroRifa numeroRifaObj={obj} />
          )
        })
      );
    }

    return(
        <Container className="grid">
            <div className="titulo">
                <h3> Selecione os números que deseja da rifa: </h3>
            </div>

            <div className={classes.root}>
                <Grid container spacing={1}>
                <Rifas />
                </Grid>
            </div>
        </Container>
    );
  } 

export default GridRifa;