import axios from "axios"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import Creatina from "./style/Creatina.png"

export default function Produtos() {

    const navigate = useNavigate();


    return (
        <PageProdutos>
            <Header>
                <img src="3 tracinhos" />
                <img src="logo" />
                <img src="carrinho" />
            </Header>

            <Banner>
                <p>MAAXIMIZE</p>
                <h1>SEU GANHO COM NOSSOS SUPLEMENTOS</h1>
            </Banner>
            <ConteudoPage>

                
            </ConteudoPage>
            <button> PROMOÇÕES</button>

            <NomeCategoria>
                <img src="icone-categoria" />
                <p>PROMOÇÕES</p>
            </NomeCategoria>
            <ListaProdutos>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>

            <NomeOutraCategoria>
                <img src="icone-categoria" />
                <p>PROMOÇÕES</p>
            </NomeOutraCategoria>

            <ListaProdutos>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
                <Produto>
                    <img src={Creatina} />
                    <h1>CREATINA POWER 300GR PROFIT</h1>
                    <p>R$123,99</p>
                </Produto>
            </ListaProdutos>

            <Footer>
                Maax Fitness Suplementos 2023. Todos os Direitos Reservados
            </Footer>

        </PageProdutos>
    )
}

const PageProdutos = styled.div`
    width: 360px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color:#000000;
`

const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    img{
        margin-left:15px;
        margin-right:15px;
        margin-top:13px;
        height:50px;
        width:50px;
    }
`

const Banner = styled.div`
    display:flex;
    flex-direction:column;
    width: 360px;
    height: 188px;
    background-color: azure;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 1000;
        font-size: 35px;
        line-height: 42px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.295em;

        color: #8E2126;

    }
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.21em;

        color: #000000;
    }


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
    img{
        width: 113px;
        height: 119px;
    }
    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;

        color: #000000;
    }
    `

const NomeOutraCategoria = styled.div`
    display:flex;
`

const Footer = styled.div`
    display:flex;
`