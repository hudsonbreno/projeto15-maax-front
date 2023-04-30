import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Logo from "./style/Logo_360x131.png"

export default function({tokem, lista, setLista}){
    return(
        <>
            <PageCheckout>
                <Header>
                    <img className="primeiro" src=""/>
                    <img className="segundo" src={Logo}/>
                    <img className="terceiro" src=""/>
                </Header>
                <BotaoFinalizar>
                <h1>COMPRA CONCLUIDA</h1>
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
const Header = styled.div`
    display: flex;
    flex-direction: row;
    .primeiro{
        width: 100px;
    }
    .segundo{
        width: 211px;
        height: 77px;
    }
    .terceiro{
        width: 100px;
    }
`

const BotaoFinalizar = styled.div`
    display: flex;
`

