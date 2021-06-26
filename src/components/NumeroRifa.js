import React from 'react';
import {Grid} from "@material-ui/core";

function NumeroRifa({numeroRifaObj}) {

    const preenchido = numeroRifaObj.preenchido;

    return(
        <Grid item xs={1}>
            <div className={preenchido ? "number-marked" : "number-unmarked"} onClick={() => {}}>
                {numeroRifaObj.codigo}
            </div>
        </Grid>
    );
}

export default NumeroRifa;