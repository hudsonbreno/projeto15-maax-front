import axios from "axios"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";


export default function Produtos() {

    const navigate = useNavigate();


    return (
        <PageProdutos>
            <Header>
                <img src="3 tracinhos"/>
                <img src="logo"/>
                <img src="carrinho"/>
            </Header>
            
            <Banner>
                <p>MAAXIMIZE</p>
                <h1>SEU GANHO COM NOSSOS SUPLEMENTOS</h1>
            </Banner>

            <button> PROMOÇÕES</button>

            <NomeCategoria>
                <img src="icone-categoria"/>
                <p>PROMOÇÕES</p>
            </NomeCategoria>
            <ListaProdutos>
                <Produto>
                    <img src="Cretina"/>
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>
            <ListaProdutos>
                <Produto>
                    <img src="Cretina"/>
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>
            <ListaProdutos>
                <Produto>
                    <img src="Cretina"/>
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>
            <ListaProdutos>
                <Produto>
                    <img src="Cretina"/>
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>

            
        </PageProdutos>
    )
}

const PageProdutos = styled.div`
    display: flex;
    background-color:#000000;
`

const Header = styled.div`
    display:flex;
`

const Banner = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const ListaProdutos = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const NomeCategoria = styled.div`
    display: flex;
`

const Produto = styled.div`
    display:flex;
`