import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function({tokem, lista, setLista}){
    return(
        <>
            <PageCheckout>
                <h1>COMPRA CONCLUIDA</h1>

                <BotaoFinalizar>
                    <button type="submit">
                        Finalizar
                    </button>
                </BotaoFinalizar>
            </PageCheckout>
        </>
    )
}

const PageCheckout = styled.div`
    display:flex;
`

const BotaoFinalizar = styled.div`
    display: flex;
`