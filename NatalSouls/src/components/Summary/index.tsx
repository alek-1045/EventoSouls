import React from 'react';
import solarie from '../../assets/solaire.svg';
import bonfi from '../../assets/bonfire.svg';
import { Container } from "./styles";
import estu from '../../assets/estus.svg';

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Versão Deluxe</p>
                    <img src={ solarie } alt="Entradas" />
                </header>
                <strong> 24 de maio de 2018 </strong>
            </div>

            <div>
                <header>
                    <p>Versão Normal</p>
                    <img src={ bonfi } alt="Saídas" />
                </header>
                <strong> 30 de maio de 2018 </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total de Vendas </p>
                    <img src={ estu } alt="Total" />
                </header>
                <strong> 720.853 Vendidos </strong>
            </div>
        </Container>
    )
}