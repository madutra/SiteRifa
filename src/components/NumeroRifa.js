import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {config} from '../config';

function NumeroRifa({numeroRifaObj}) {

    const [preenchido, setPreenchido] = useState(numeroRifaObj.preenchido)

    function toggleSelected() {
        if (preenchido)
          return;

        // setPreenchido(! preenchido);
        window.open(`${config.whatsapp_url}${config.whatsapp_frase}`, '_blank');
    }

    return(
        <Grid item xs={1}>
            <div className={preenchido ? "number-marked" : "number-unmarked"}
                 onClick={toggleSelected}
                 title={preenchido ? "Este número já foi selecionado" : "Clique para escolher este número"}>
                {numeroRifaObj.codigo}
            </div>
        </Grid>
    );
}

export default NumeroRifa;