import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./style/Logo.png";
import Creatina from "./style/Creatina.png";
import banner from "./style/Banner.png";
import Promocao from "./style/Promocao.png";

export default function Produtos() {
  const navigate = useNavigate();

  return (
    <PageProdutos>
      <Header>
        <img src="3 tracinhos" />
        <img className="logo" src={Logo} />
        <img src="carrinho" />
      </Header>

      <Banner>
        <img src={banner} />
        <p>MAAXIMIZE</p>
        <h1>SEU GANHO COM NOSSOS SUPLEMENTOS</h1>
      </Banner>

      <ConteudoPagina>
        <button> PROMOÇÕES</button>

        <NomeCategoria>
          <img src={Promocao} />
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
          <Produto>
            <img src={Creatina} />
            <h1>CREATINA POWER 300GR PROFIT</h1>
            <p>R$123,99</p>
          </Produto>
        </ListaProdutos>
      </ConteudoPagina>

      <Footer>
        <p>Maax Fitness Suplementos 2023</p>
        <p>Todos os Direitos Reservados</p>
      </Footer>
    </PageProdutos>
  );
}

const PageProdutos = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

const Header = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 13px;
    height: 50px;
    width: 50px;
  }
  .logo {
    width: 211px;
    height: 70px;
  }
`;

const Banner = styled.div`
  position: relative;
  width: 360px;
  height: 155px;
  img {
    width: 360px;
    height: 155px;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    top: 10px;
    left: 36px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 35px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.295em;

    color: #8e2126;
  }
  h1 {
    position: absolute;
    top: 54px;
    left: 10px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.21em;

    color: #ffffff;
  }
`;

const ConteudoPagina = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  button {
    margin-top: 16px;
    margin-bottom: 10px;
  }
`;

const ListaProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NomeCategoria = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 38px;
    margin-left: 15px;
    margin-right: 15px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 177px;
  img {
    margin-top: 3px;
    width: 113px;
    height: 119px;
  }
  h1 {
    margin-top: 3px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;

    color: #000000;
  }
  p {
    margin-top: 7px;
    margin-bottom: 7px;
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 72px;
    height: 26px;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

const NomeOutraCategoria = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;
