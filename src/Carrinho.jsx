import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function({tokem, lista, setLista}){
    return(
        <>
            <PageCarrinho>
                <ItemDaLista>
                    <p>Creatina</p>
                    <div>
                        <p>Quant.</p>
                        <h2>3</h2>
                    </div>
                    <h1>R$35,00</h1>
                </ItemDaLista>
            </PageCarrinho>
        </>
    )
}