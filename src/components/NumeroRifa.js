import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {config} from '../config';

function NumeroRifa({numeroRifaObj}) {

    const [preenchido, setPreenchido] = useState(numeroRifaObj.preenchido)

    function toggleSelected() {
        if (preenchido)
          return;

        // setPreenchido(! preenchido);
        window.open(`${config.whatsapp_url}?text=${config.whatsapp_frase.replace('{numero_vem_aqui}', numeroRifaObj.codigo)}`, '_blank');
    }

    return(
        <Grid item xs={1} className="GridNumber">
            <div className={preenchido ? "number-marked" : "number-unmarked"}
                 onClick={toggleSelected}
                 title={preenchido ? "Este número já foi selecionado" : "Clique para escolher este número"}>
                {numeroRifaObj.codigo}
            </div>
        </Grid>
    );
}

export default NumeroRifa;