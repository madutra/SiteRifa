import React from 'react';
import mainImage from '../assets/Caio.png'
import legendaImage from '../assets/legenda.png'
import premioImage from '../assets/premio.png'

function Foto() {
    return(
        <div className="foto">
            <img src={mainImage} alt="caioImage"/>
            <h1 className="texto">
                Rifa Beneficente do Caio Galdino
                <br></br>
                <br></br>
                Caio Galdino está lutando fazendo fisioterapia, então os familiares e amigos resolveram fazer uma rifa para ajudá-lo a passar por esse momento de complicação!
                A rifa terá como prêmio um PIX de R$ 400,00.
                <br></br>
                <br></br>
                Se você tiver interesse de comprar, basta seguir o tutorial abaixo: 
            </h1>

            <div className="divisao"/>
            
            <h2>
                Caso deseje comprar 1 número somente: clicar no número desejado e então informar no wpp as informações do comprador.
                <br></br>
                <br></br>
                Caso deseje comprar mais de 1 número: clicar em algum numero desejado e na informar no WhatsApp quais serão os números a serem comprados e as 
                informações do comprador.
                <br></br> 
                <br></br>
                Cada número está no valor de R$ 10,00.
                A legenda dos números é:  
            </h2>
            <img src={legendaImage} alt="legendaImagem" />
            <br></br>
            <br></br>
            <h2>
                O prêmio da Rifa é: O valor de R$ 400,00 para o número ganhador.
            </h2>
            <img src={premioImage} alt="premioImagem" />
        </div>
    );
}

export default Foto;