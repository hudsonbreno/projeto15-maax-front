import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function({tokem, lista, setLista}){
    return(
        <>
            <PageCarrinho>
                <h1>CARRIDO DO BRENO</h1>
                <ItemDaLista>
                    <img src="creatina"/>
                    <div>
                        <p>Creatina</p>
                        <p>Integral Medica</p>
                        <p>300G</p>
                    </div>
                    <div>
                        <p>Quant.</p>
                        <h2>3</h2>
                    </div>
                    <h1>R$35,00</h1>
                </ItemDaLista>

                <div>
                    <h1>Total</h1>
                    <p>R$129,99</p>
                </div>

                <BotaoFinalizar>
                    <button type="submit">
                        Finalizar
                    </button>
                </BotaoFinalizar>
            </PageCarrinho>
        </>
    )
}

const PageCarrinho = styled.div`
    display:flex;

`

const ItemDaLista = styled.div`
    display:flex;
    width: 326px;
    height: 202px;
    border-radius: 5px;
    border: 1px solid black;
`

const BotaoFinalizar = styled.div`
    display: flex;
`